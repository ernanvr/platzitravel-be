import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';
import { OfferHotelProduct } from '../entities/offer-hotel-products.entity';
import {
  UpdateHotelProductDto,
  CreateHotelProductDto,
} from 'src/modules/hotels/dtos/hotel-products.dtos';

@Injectable()
export class OfferHotelProductsService {
  constructor(
    @InjectRepository(OfferHotelProduct)
    private repository: Repository<OfferHotelProduct>,
  ) {}

  findAll(): Promise<OfferHotelProduct[]> {
    return this.repository.find();
  }

  findOne(id: number): Promise<OfferHotelProduct> {
    return this.repository.findOne({
      where: { id },
    });
  }

  create(payload: CreateHotelProductDto): Promise<OfferHotelProduct> {
    const response = this.repository.create(payload);
    return this.repository.save(response);
  }

  async update(
    id: number,
    payload: UpdateHotelProductDto,
  ): Promise<OfferHotelProduct> {
    const response = await this.findOne(id);
    this.repository.merge(response, payload);
    return this.repository.save(response);
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findOne(id);
    return this.repository.softDelete(id);
  }
}
