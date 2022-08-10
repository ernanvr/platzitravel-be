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
    private repository: Repository<OfferTransportProduct>,
  ) {}

  findAll(): Promise<OfferTransportProduct[]> {
    return this.repository.find();
  }

  findOne(id: number): Promise<OfferTransportProduct> {
    return this.repository.findOne({
      where: { id },
    });
  }

  create(
    payload: CreateOfferTransportProductDto,
  ): Promise<OfferTransportProduct> {
    const response = this.repository.create(payload);
    return this.repository.save(response);
  }

  async update(
    id: number,
    payload: UpdateOfferTransportProductDto,
  ): Promise<OfferTransportProduct> {
    const response = await this.findOne(id);
    this.repository.merge(response, payload);
    return this.repository.save(response);
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findOne(id);
    return this.repository.softDelete(id);
  }
}
