import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';
import {
  CreateHotelProductDto,
  UpdateHotelProductDto,
} from '../dtos/hotel-products.dtos';
import { HotelProduct } from '../entities/hotel-products.entity';

@Injectable()
export class HotelProductsService {
  constructor(
    @InjectRepository(HotelProduct)
    private hotelProductRepository: Repository<HotelProduct>,
  ) {}

  findAll(): Promise<HotelProduct[]> {
    return this.hotelProductRepository.find();
  }

  async findOne(id: number): Promise<HotelProduct> {
    const hotelProduct = await this.hotelProductRepository.findOne({
      where: { id },
    });

    if (!hotelProduct) {
      throw new NotFoundException(`Hotel product ${id} was not found`);
    }

    return hotelProduct;
  }

  create(payload: CreateHotelProductDto): Promise<HotelProduct> {
    const newHotelProduct = this.hotelProductRepository.create(payload);
    return this.hotelProductRepository.save(newHotelProduct);
  }

  async update(
    id: number,
    payload: UpdateHotelProductDto,
  ): Promise<HotelProduct> {
    const hotelProduct = await this.findOne(id);
    this.hotelProductRepository.merge(hotelProduct, payload);
    return this.hotelProductRepository.save(hotelProduct);
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findOne(id);
    return this.hotelProductRepository.delete(id);
  }
}
