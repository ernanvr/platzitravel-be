import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';
import {
  CreateSupplierProductDto,
  UpdateSupplierProductDto,
} from '../dtos/supplier-products.dto';
import { SupplierProduct } from '../entities/supplier-products.entity';

@Injectable()
export class SupplierProductsService {
  constructor(
    @InjectRepository(SupplierProduct)
    private SupplierProductRepository: Repository<SupplierProduct>,
  ) {}

  findAll(): Promise<SupplierProduct[]> {
    return this.SupplierProductRepository.find();
  }

  async findOne(id: number): Promise<SupplierProduct> {
    const SupplierProduct = await this.SupplierProductRepository.findOne({
      where: { id },
    });

    if (!SupplierProduct) {
      throw new NotFoundException(`Supplier product ${id} was not found`);
    }

    return SupplierProduct;
  }

  create(payload: CreateSupplierProductDto): Promise<SupplierProduct> {
    const newSupplierProduct = this.SupplierProductRepository.create(payload);
    return this.SupplierProductRepository.save(newSupplierProduct);
  }

  async update(
    id: number,
    payload: UpdateSupplierProductDto,
  ): Promise<SupplierProduct> {
    const SupplierProduct = await this.findOne(id);
    this.SupplierProductRepository.merge(SupplierProduct, payload);
    return this.SupplierProductRepository.save(SupplierProduct);
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findOne(id);
    return this.SupplierProductRepository.softDelete(id);
  }
}
