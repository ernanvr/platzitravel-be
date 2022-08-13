import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';
import {
  CreateOfferTransportProductDto,
  UpdateOfferTransportProductDto,
} from '../dtos/offer-transport-products.dtos';
import { OfferTransportProduct } from '../entities/offer-transport-products.entity';

@Injectable()
export class OfferTransportProductsService {
  constructor(
    @InjectRepository(OfferTransportProduct)
    private offerTransportProduct: Repository<OfferTransportProduct>,
  ) {}

  findAll(): Promise<OfferTransportProduct[]> {
    return this.offerTransportProduct.find();
  }

  findOne(id: number): Promise<OfferTransportProduct> {
    return this.offerTransportProduct.findOne({
      where: { id },
    });
  }

  create(
    payload: CreateOfferTransportProductDto,
  ): Promise<OfferTransportProduct> {
    const response = this.offerTransportProduct.create(payload);
    return this.offerTransportProduct.save(response);
  }

  async update(
    id: number,
    payload: UpdateOfferTransportProductDto,
  ): Promise<OfferTransportProduct> {
    const response = await this.findOne(id);
    this.offerTransportProduct.merge(response, payload);
    return this.offerTransportProduct.save(response);
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findOne(id);
    return this.offerTransportProduct.softDelete(id);
  }
}
