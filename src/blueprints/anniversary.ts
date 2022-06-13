import { Customers } from "./customer";
import { Customer } from "../types/customer.type";
import { distanceInKm, lat, long } from "../constant";

export class Anniversary {
    
     customers: Customer[] = [];
     customerIds: string[] = [];
    
     constructor(private customer: Customers) {
         this.customer = new Customers();
     }
     

    getExportedCustomers(): void {
        
        this.customer.exportCustomer();
        this.customers = this.customer.customers;
    }

    get eligibleCustomers(): string[] {
        if(this.customers.length > 0) {
            
            for (let c of this.customers) {
                
                const customerDistance = this.greatCircleDistance(
                                lat, long, 
                                Number(c.lat), 
                                Number(c.long)
                            );
                
                if(customerDistance <= distanceInKm) {
                    this.customerIds.push(c.id);
                }
            }
        
            return this.customerIds.sort((a: string, b: string) => Number(a) - Number(b));
            
        } else {
            return this.customerIds;
        }

    }


    greatCircleDistance(lat1: number, long1: number, lat2: number, long2: number): number {
        let p = 0.017453292519943295; 
        let c = Math.cos;
        let a = 0.5 - c((lat2 - lat1) * p)/2 + 
                c(lat1 * p) * c(lat2 * p) * 
                (1 - c((long2 - long1) * p))/2;
      
        return 12742 * Math.asin(Math.sqrt(a));
    }

}