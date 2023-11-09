// const path = require('path');
import { CsvError, parse } from 'csv-parse';
// const csv = require('csv-parse');

type Service = {
    idService: string,
    idOrganization: string,
    name: string,
    description: string,
    email: string,
    url: string,
    status: string,
    applicationProcess: string,
    waitTime: string,
    fees: string,
    schedule: string,
    eligibility: string,
    document: string,
    createdOn: string,
    lastUpdated: string,
    lastVerified: string
};

type Address = {
    idLocation: string,
    idAddress: string,
    type: string,
    address_1: string,
    address_2: string,
    city: string,
    region: string,
    state_province: string,
    zipcode: string,
    country: string
};

type Agency = {
    id: string,
    name: string,
    description: string,
    url: string,
    legalStatus: string,
    createdOn: string,
    lastUpdated: string,
    lastVerified: string,
    source: string
};

type Taxonomy = {
    Agency_ID: string,
    Site_ID: string,
    Service_ID: string,
    Status: string,
    Category_Code: string,
    Category_Name: string,
    Subcategory_Code: string,
    Subcategory_Name: string,
    VL_Taxonomy_Code_1: string,
    Taxonomy_Name_1: string,
    VL_Target_Term: string,
    Target_Term_Name: string
};

type Phone = {
    idOrganization: string,
    idService: string,
    idServiceAtLocation: string,
    idLocation: string,
    idContact: string,
    idPhone: string,
    number: string,
    extension: string
};

type Site = {
    idLocation: string,
    name: string,
    latitude: string,
    longitude: string,
    accessibility: string
};

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