import { Module } from '@nestjs/common';
import { AnniversaryService } from './anniversary.service';
import { CustomerService } from './customer.service';

@Module({
  imports: [],
  controllers: [],
  providers: [AnniversaryService, CustomerService],
})
export class ServiceModule {}
