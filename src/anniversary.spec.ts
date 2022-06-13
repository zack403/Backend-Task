import { INestApplication } from "@nestjs/common";
import { Test, TestingModule } from "@nestjs/testing";
import { AnniversaryService } from "./blueprints/services/anniversary.service";
import { ServiceModule } from "./blueprints/services/services.module";



describe('anniversary class', () => {
    let a: AnniversaryService;
    let app: INestApplication;


  beforeEach(async () => {
      
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [ServiceModule],
    }).compile();

    a = moduleFixture.get<AnniversaryService>(AnniversaryService);


    app = moduleFixture.createNestApplication();
    await app.init();

  });
    
    
    it('should be defined', async () => {
        expect(a.customers).toBeDefined()
    })
    
    it('getExportedCustomers should be called', async () => {
        
        const getExportedCustomersSpy = jest.spyOn(a, "eligibleCustomers");
        expect(getExportedCustomersSpy).toBeDefined()
    })

    it('greatCircleDistance should be truthy', async () => {
        
        const greatCircleDistanceSpy = jest.spyOn(a, "greatCircleDistance");
        expect(greatCircleDistanceSpy).toBeTruthy()
    })
})