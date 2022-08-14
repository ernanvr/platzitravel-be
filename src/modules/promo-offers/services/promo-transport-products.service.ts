import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';
import {
  CreatePromoOfferTransportProductDto,
  UpdatePromoOfferTransportProductDto,
} from '../dtos/promo-offers-transport-products.dtos';
import { PromoOfferTransportProduct } from '../entities/promo-offer-transport-products.entity';

@Injectable()
export class PromoTransportProductsService {
  constructor(
    @InjectRepository(PromoOfferTransportProduct)
    private promoTransportRepository: Repository<PromoOfferTransportProduct>,
  ) {}

  findAll(): Promise<PromoOfferTransportProduct[]> {
    return this.promoTransportRepository.find();
  }

  findOne(id: number): Promise<PromoOfferTransportProduct> {
    const response = this.promoTransportRepository.findOne({
      where: { id },
    });

    if (!response) {
      throw new NotFoundException(`Promo offer ${id} was not found`);
    }

    return response;
  }

  create(
    payload: CreatePromoOfferTransportProductDto,
  ): Promise<PromoOfferTransportProduct> {
    const newPromoOffer = this.promoTransportRepository.create(payload);
    return this.promoTransportRepository.save(newPromoOffer);
  }

  async udpate(
    id: number,
    payload: UpdatePromoOfferTransportProductDto,
  ): Promise<PromoOfferTransportProduct> {
    const response = await this.findOne(id);
    this.promoTransportRepository.merge(response, payload);
    return this.promoTransportRepository.save(response);
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findOne(id);
    return this.promoTransportRepository.softDelete(id);
  }
}
