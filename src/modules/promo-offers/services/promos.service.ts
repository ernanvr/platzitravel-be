import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
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
}
