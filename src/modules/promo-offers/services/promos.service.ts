import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import {
  CreatePromoOfferDto,
  UpdatePromoOfferDto,
} from '../dtos/promo-offers.dtos';
import { PromoOffer } from '../entities/promo-offers.entity';

@Injectable()
export class PromosService {
  constructor(
    @InjectRepository(PromoOffer)
    private promoRepository: Repository<PromoOffer>,
  ) {}

  findAll(): Promise<PromoOffer[]> {
    return this.promoRepository.find();
  }

  findOne(id: number): Promise<PromoOffer> {
    const response = this.promoRepository.findOne({
      where: { id },
    });

    if (!response) {
      throw new NotFoundException(`Promo offer ${id} was not found`);
    }

    return response;
  }

  create(payload: CreatePromoOfferDto): Promise<PromoOffer> {
    const newPromoOffer = this.promoRepository.create(payload);
    return this.promoRepository.save(newPromoOffer);
  }

  async udpate(id: number, payload: UpdatePromoOfferDto): Promise<PromoOffer> {
    const response = await this.findOne(id);
    this.promoRepository.merge(response, payload);
    return this.promoRepository.save(response);
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findOne(id);
    return this.promoRepository.softDelete(id);
  }
}
