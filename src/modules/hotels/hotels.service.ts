import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateHotelDto, UpdateHotelDto } from './dtos/hotels.dtos';
import { Hotel } from './entities/hotels.entity';

@Injectable()
export class HotelsService {
  constructor(@InjectRepository(Hotel) private hotelRepo: Repository<Hotel>) {}

  findAll() {
    return this.hotelRepo.find();
  }

  findOne(id: number) {
    const hotel = this.hotelRepo.findOne({
      where: { id },
    });

    if (!hotel) {
      throw new NotFoundException(`The ${id} does not exist`);
    }

    return hotel;
  }

  create(payload: CreateHotelDto) {
    const newHotel = this.hotelRepo.create(payload);

    return this.hotelRepo.save(newHotel);
  }

  async update(id: number, payload: UpdateHotelDto) {
    const hotel = await this.hotelRepo.findOne({
      where: { id },
    });

    if (!hotel) {
      throw new NotFoundException(`The ${id} does not exist`);
    }

    this.hotelRepo.merge(hotel, payload);
    return this.hotelRepo.save(hotel);
  }
}
