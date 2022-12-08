import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';
import { OfferSupplierProduct } from '../entities/offer-supplier-products.entity';
import {
  CreateOfferSupplierProductDto,
  UpdateOfferSupplierProductDto,
} from '../dtos/offer-supplier-products.dto';

@Injectable()
export class OfferSupplierProductsService {
  constructor(
    @InjectRepository(OfferSupplierProduct)
    private offerSupplierProductsRepository: Repository<OfferSupplierProduct>,
  ) {}

  findAll(): Promise<OfferSupplierProduct[]> {
    return this.offerSupplierProductsRepository.find();
  }

  async findOne(id: number): Promise<OfferSupplierProduct> {
    const response = await this.offerSupplierProductsRepository.findOne({
      where: { id },
    });

    if (!response) {
      throw new NotFoundException(`Offer Supplier product ${id} not found`);
    }

    return response;
  }

  create(
    payload: CreateOfferSupplierProductDto,
  ): Promise<OfferSupplierProduct> {
    const response = this.offerSupplierProductsRepository.create(payload);
    return this.offerSupplierProductsRepository.save(response);
  }

  async update(
    id: number,
    payload: UpdateOfferSupplierProductDto,
  ): Promise<OfferSupplierProduct> {
    const response = await this.findOne(id);
    this.offerSupplierProductsRepository.merge(response, payload);
    return this.offerSupplierProductsRepository.save(response);
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findOne(id);
    return this.offerSupplierProductsRepository.softDelete(id);
  }
}
