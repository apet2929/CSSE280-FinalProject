import * as fs from 'fs';
import * as path from 'path';
import { parse } from 'csv-parse';

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
}
