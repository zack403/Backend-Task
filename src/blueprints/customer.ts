import fs from 'fs';
import { Customer } from '../types/customer.type';

export class Customers {
    private customerData: Customer[] = [];

    exportCustomer(): void {
        
        const customersFile = fs.readFileSync('customers.txt').toString().split('\n');

        for (const [index, data] of customersFile.entries()) {
            
            if(!data) {
                continue;
            }
            
            let customer = data.split(",");
            
            const id = customer[0].split(":")[1].trim();
            const lat = customer[1].split(":")[1].trim();
            const long = customer[2].split(":")[1].trim();

            if(!this.isValidUUID(id)) {
                console.warn(`Invalid id: ${id} supplied at line number ${index + 1}`)
            }

            if(!this.isValidLatAndLong(`${lat},${long}`)) {
                console.warn(`Invalid latitude: ${lat} and longitude: ${long} supplied at line number ${index + 1}`)
            }

            let obj: Customer = {
                id,
                lat,
                long
            }

            this.customerData.push(obj);
            obj as {};

        }
    }

    get customers(): Customer[] {
        return this.customerData;
    }

    private isValidLatAndLong (cordinates: string): boolean {

        const regexExp = /^((\-?|\+?)?\d+(\.\d+)?),\s*((\-?|\+?)?\d+(\.\d+)?)$/gi;
        return regexExp.test(cordinates);
    }

    private isValidUUID (uuid: string): boolean {

        const regexExp = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;
        return regexExp.test(uuid); 
    }
}