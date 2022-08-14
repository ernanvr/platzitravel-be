import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';
import {
  CreatePromoOfferHotelProductDto,
  UpdatePromoOfferHotelProductDto,
} from '../dtos/promo-offers-hotel-products.dtos';
import { PromoOfferHotelProduct } from '../entities/promo-offer-hotel-products.entity';

@Injectable()
export class PromoHotelProductsService {
  constructor(
    @InjectRepository(PromoOfferHotelProduct)
    private promoHotelProductRepository: Repository<PromoOfferHotelProduct>,
  ) {}

  findAll(): Promise<PromoOfferHotelProduct[]> {
    return this.promoHotelProductRepository.find();
  }

  findOne(id: number): Promise<PromoOfferHotelProduct> {
    const response = this.promoHotelProductRepository.findOne({
      where: { id },
    });

    if (!response) {
      throw new NotFoundException(`Promo offer ${id} was not found`);
    }

    return response;
  }

  create(
    payload: CreatePromoOfferHotelProductDto,
  ): Promise<PromoOfferHotelProduct> {
    const newPromoOffer = this.promoHotelProductRepository.create(payload);
    return this.promoHotelProductRepository.save(newPromoOffer);
  }

  async udpate(
    id: number,
    payload: UpdatePromoOfferHotelProductDto,
  ): Promise<PromoOfferHotelProduct> {
    const response = await this.findOne(id);
    this.promoHotelProductRepository.merge(response, payload);
    return this.promoHotelProductRepository.save(response);
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findOne(id);
    return this.promoHotelProductRepository.softDelete(id);
  }
}
