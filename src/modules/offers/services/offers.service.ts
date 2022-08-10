import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Offer } from '../entities/offers.entity';
import { DeleteResult, Repository } from 'typeorm';
import { CreateOfferDto, UpdateOfferDto } from '../dtos/offers.dtos';

@Injectable()
export class OffersService {
  constructor(
    @InjectRepository(Offer) private offerRepository: Repository<Offer>,
  ) {}

  findAll(): Promise<Offer[]> {
    return this.offerRepository.find();
  }

  findOne(id: number): Promise<Offer> {
    return this.offerRepository.findOne({
      where: { id },
    });
  }

  create(payload: CreateOfferDto): Promise<Offer> {
    const newOffer = this.offerRepository.create(payload);
    return this.offerRepository.save(newOffer);
  }

  async update(id: number, payload: UpdateOfferDto): Promise<Offer> {
    const offer = await this.findOne(id);
    this.offerRepository.merge(offer, payload);
    return this.offerRepository.save(offer);
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findOne(id);
    return this.offerRepository.softDelete(id);
  }
}
