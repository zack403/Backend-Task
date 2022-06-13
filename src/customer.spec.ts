import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { CustomerService } from "./blueprints/services/customer.service";
import { ServiceModule } from './blueprints/services/services.module';

describe('CustomerService', () => {
  let app: INestApplication;
  let c: CustomerService;


  beforeEach(async () => {
      
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [ServiceModule],
    }).compile();

    c = moduleFixture.get<CustomerService>(CustomerService);


    app = moduleFixture.createNestApplication();
    await app.init();

    c.exportCustomer();

  });

 
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

   
});
