import { Injectable, OnModuleInit } from '@nestjs/common';
import { Customer } from '../types/customer.type';
import * as fs from 'fs';

@Injectable()
export class CustomerService {
    
        private customerData: Customer[] = [];

        
        exportCustomer(): Customer[] {
                
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
                    console.log(`Invalid id: ${id} supplied at line number ${index + 1}`)
                }

                if(!this.isValidLatAndLong(`${lat},${long}`)) {
                    console.log(`Invalid latitude: ${lat} and longitude: ${long} supplied at line number ${index + 1}`)
                }

                let obj: Customer = {
                    id,
                    lat,
                    long
                }

                this.customerData.push(obj);
                obj as {};

            }

            return this.customerData;
        }

        get customers(): Customer[] {
            return this.customerData;
        }

        isValidLatAndLong (cordinates: string): boolean {

            const regexExp = /^((\-?|\+?)?\d+(\.\d+)?),\s*((\-?|\+?)?\d+(\.\d+)?)$/gi;
            return regexExp.test(cordinates);
        }

        isValidUUID (uuid: string): boolean {

            const regexExp = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;
            return regexExp.test(uuid); 
        }

}
