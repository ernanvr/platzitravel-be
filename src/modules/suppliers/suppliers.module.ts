import { Module } from '@nestjs/common';
import { SuppliersService } from './services/suppliers.service';
import { SuppliersController } from './controllers/suppliers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Supplier } from './entities/suppliers.entity';
import { SupplierProductsService } from './services/supplier-products.service';
import { SupplierProductsController } from './controllers/suppliers-products.controller';
import { SupplierProduct } from './entities/supplier-products.entity';
import { CompanyType } from './entities/company-types.entity';
import { CompanyTypesService } from './services/company-types.service';
import { CompanyTypesController } from './controllers/company-types.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Supplier, SupplierProduct, CompanyType])],
  providers: [SuppliersService, SupplierProductsService, CompanyTypesService],
  controllers: [
    SuppliersController,
    SupplierProductsController,
    CompanyTypesController,
  ],
})
export class SuppliersModule {}
