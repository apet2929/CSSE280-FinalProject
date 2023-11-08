const std = @import("std");
const http = std.http;
const counties_uri = std.Uri.parse("https://in211.scanurag.com/countyList.json") catch unreachable;
const Allocator = std.mem.Allocator;
const json = std.json;

pub fn main() !void {
    var gpa = std.heap.GeneralPurposeAllocator(.{}){};
    // defer std.debug.assert(gpa.deinit() == .ok);
    const allocator = gpa.allocator();
    const json_res: json.Parsed(json.Value) = try getJson(counties_uri, allocator);
    defer json_res.deinit();
    var county_str = "Floyd County".*;
    var catagory = "".*;
    const county: json.Parsed(json.Value) = try retrieveCounty(&county_str, &catagory, json_res, allocator);
    defer county.deinit();
    // const val = json_res.value.object.contains("Floyd County");
    std.debug.print("{any}\n", .{county.value.array});
}

fn getJson(uri: std.Uri, allocator: Allocator) !json.Parsed(json.Value) {
    var client: http.Client = .{ .allocator = allocator };
    defer client.deinit();
    var req = try client.request(.GET, uri, .{ .allocator = allocator }, .{});
    defer req.deinit();
    try req.start();
    try req.wait();
    const reader = req.reader();
    var lst: std.ArrayList(u8) = std.ArrayList(u8).init(allocator);
    // defer lst.deinit();
    var writer = lst.writer();
    while (true) {
        const byte = reader.readByte() catch |err| switch (err) {
            error.EndOfStream => break,
            else => |e| return e,
        };
        try writer.writeByte(byte);
    }
    const parsed = std.json.parseFromSlice(json.Value, allocator, lst.items, .{ .allocate = .alloc_always });
    return parsed;
}

const NoSuchCountyError = error.NoSuchCounty;

fn retrieveCounty(county: []u8, catagory: []u8, county_list: json.Parsed(json.Value), allocator: Allocator) !json.Parsed(json.Value) {
    const county_resources: json.Value = county_list.value.object.get(county) orelse return NoSuchCountyError;
    const county_uri_str: []u8 = try std.fmt.allocPrint(allocator, "https://in211.scanurag.com{s}", .{county_resources.string});
    const county_uri = try std.Uri.parse(county_uri_str);
    // allocator.free(county_uri_str);
    _ = catagory;
    return try getJson(county_uri, allocator);
}
