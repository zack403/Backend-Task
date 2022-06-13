import { Anniversary } from "../blueprints/anniversary";
import { Customers } from "../blueprints/customer"


describe('anniversary class', () => {
    let a: Anniversary;
    beforeEach( () => {
        a = new Anniversary(new Customers);
        a.getExportedCustomers();
    })
    
    it('should be defined', async () => {
        expect(a.customers).toBeDefined()
    })
    
    it('getExportedCustomers should be called', async () => {
        
        const getExportedCustomersSpy = jest.spyOn(a, "getExportedCustomers");
        expect(getExportedCustomersSpy).toBeDefined()
    })

    it('greatCircleDistance should be truthy', async () => {
        
        const greatCircleDistanceSpy = jest.spyOn(a, "greatCircleDistance");
        expect(greatCircleDistanceSpy).toBeTruthy()
    })
})