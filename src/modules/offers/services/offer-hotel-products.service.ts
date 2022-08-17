import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';
import { OfferHotelProduct } from '../entities/offer-hotel-products.entity';
import {
  CreateOfferHotelProductDto,
  UpdateOfferHotelProductDto,
} from '../dtos/offer-hotel-products.dto';

@Injectable()
export class OfferHotelProductsService {
  constructor(
    @InjectRepository(OfferHotelProduct)
    private offerHotelProductsRepository: Repository<OfferHotelProduct>,
  ) {}

  findAll(): Promise<OfferHotelProduct[]> {
    return this.offerHotelProductsRepository.find();
  }

  async findOne(id: number): Promise<OfferHotelProduct> {
    const response = await this.offerHotelProductsRepository.findOne({
      where: { id },
    });

    if (!response) {
      throw new NotFoundException(`Offer hotel product ${id} not found`);
    }

    return response;
  }

  create(payload: CreateOfferHotelProductDto): Promise<OfferHotelProduct> {
    const response = this.offerHotelProductsRepository.create(payload);
    return this.offerHotelProductsRepository.save(response);
  }

  async update(
    id: number,
    payload: UpdateOfferHotelProductDto,
  ): Promise<OfferHotelProduct> {
    const response = await this.findOne(id);
    this.offerHotelProductsRepository.merge(response, payload);
    return this.offerHotelProductsRepository.save(response);
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findOne(id);
    return this.offerHotelProductsRepository.softDelete(id);
  }
}
