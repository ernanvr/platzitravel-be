import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';
import {
  CreatePromoOfferSupplierProductDto,
  UpdatePromoOfferSupplierProductDto,
} from '../dtos/promo-offers-supplier-products.dto';
import { PromoOfferSupplierProduct } from '../entities/promo-offer-supplier-products.entity';

@Injectable()
export class PromoHotelProductsService {
  constructor(
    @InjectRepository(PromoOfferSupplierProduct)
    private promoHotelProductRepository: Repository<PromoOfferSupplierProduct>,
  ) {}

  findAll(): Promise<PromoOfferSupplierProduct[]> {
    return this.promoHotelProductRepository.find();
  }

  async findOne(id: number): Promise<PromoOfferSupplierProduct> {
    const response = await this.promoHotelProductRepository.findOne({
      where: { id },
    });

    if (!response) {
      throw new NotFoundException(`Promo offer ${id} was not found`);
    }

    return response;
  }

  create(
    payload: CreatePromoOfferSupplierProductDto,
  ): Promise<PromoOfferSupplierProduct> {
    const newPromoOffer = this.promoHotelProductRepository.create(payload);
    return this.promoHotelProductRepository.save(newPromoOffer);
  }

  async udpate(
    id: number,
    payload: UpdatePromoOfferSupplierProductDto,
  ): Promise<PromoOfferSupplierProduct> {
    const response = await this.findOne(id);
    this.promoHotelProductRepository.merge(response, payload);
    return this.promoHotelProductRepository.save(response);
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findOne(id);
    return this.promoHotelProductRepository.softDelete(id);
  }
}
