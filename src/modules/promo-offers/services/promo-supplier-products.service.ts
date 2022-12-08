import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';
import {
  CreatePromoOfferSupplierProductDto,
  UpdatePromoOfferSupplierProductDto,
} from '../dtos/promo-offers-supplier-products.dto';
import { PromoOfferSupplierProduct } from '../entities/promo-offer-supplier-products.entity';

@Injectable()
export class PromoSupplierProductsService {
  constructor(
    @InjectRepository(PromoOfferSupplierProduct)
    private promoSupplierProductRepository: Repository<PromoOfferSupplierProduct>,
  ) {}

  findAll(): Promise<PromoOfferSupplierProduct[]> {
    return this.promoSupplierProductRepository.find();
  }

  async findOne(id: number): Promise<PromoOfferSupplierProduct> {
    const response = await this.promoSupplierProductRepository.findOne({
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
    const newPromoOffer = this.promoSupplierProductRepository.create(payload);
    return this.promoSupplierProductRepository.save(newPromoOffer);
  }

  async udpate(
    id: number,
    payload: UpdatePromoOfferSupplierProductDto,
  ): Promise<PromoOfferSupplierProduct> {
    const response = await this.findOne(id);
    this.promoSupplierProductRepository.merge(response, payload);
    return this.promoSupplierProductRepository.save(response);
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findOne(id);
    return this.promoSupplierProductRepository.softDelete(id);
  }
}
