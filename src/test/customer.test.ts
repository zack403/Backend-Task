import { Customers } from "../blueprints/customer"


describe('customer class', () => {
    let c: Customers;
    beforeEach( () => {
        c = new Customers();
        c.exportCustomer();
    })
    
    it('should be defined', async () => {
        expect(c.customers).toBeDefined()
    })
    
    it('isValidUUID should be truthy', async () => {
        
        const validIdSpy = jest.spyOn(c, "isValidUUID");
        expect(validIdSpy).toBeTruthy()
    })

    it('isValidLatAndLong should be truthy', async () => {
        
        const validLatAndLonSpy = jest.spyOn(c, "isValidLatAndLong");
        expect(validLatAndLonSpy).toBeTruthy()
    })
})