// const path = require('path');
import { CsvError, parse } from 'csv-parse';
// const csv = require('csv-parse');

export type Service = {
    "agency_id": number,
    "site_id": number,
    "agency_name": String,
    "agency_desc": String,
    "site_name": String,
    "address_1": String,
    "address_2": String,
    "city": String,
    "zipcode": String,
    "county": String,
    "state_province": String,
    "latitude": number,
    "longitude": number,
    "site_number": String, // phone number
    "service_id": number,
    "service_name": String,
    "service_description": String,
    "taxonomy_code": String,
    "taxonomy_name": String,
    "taxonomy_category": String,
    "nameLevel2": String,
    "nameLevel3": String,
    "nameLevel4": String,
    "nameLevel5": String,
    "service_email": String,
    "service_website": String,
    "status": String,
    "site_details": String,
    "site_schedule": String,
    "site_eligibility": String,
    "createdon": String,
    "lastupdated": String,
    "lastVerified": String,
}

export const TAXONOMY_CATEGORIES: String[] = [
    "Education", 
]

async function getData(county: String) {
    let response = await fetch(`https://in211.scanurag.com/countyList.json`)
    console.log(response);
    if(response.statusText === "success") {
        return "Yee"
    } else {
        return response.json()
    }
}


export { getData };