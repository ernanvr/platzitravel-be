import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CreateHotelDto, UpdateHotelDto } from '../dtos/hotels.dto';
import { Hotel } from '../entities/hotels.entity';

@Injectable()
export class HotelsService {
  constructor(
    @InjectRepository(Hotel) private hotelRepository: Repository<Hotel>,
  ) {}

  findAll(): Promise<Hotel[]> {
    return this.hotelRepository.find();
  }

  async findOne(id: number): Promise<Hotel> {
    const hotel = await this.hotelRepository.findOne({
      where: { id },
    });

    if (!hotel) {
      throw new NotFoundException(`Hotel ${id} does not exist`);
    }

    return hotel;
  }

  create(payload: CreateHotelDto): Promise<Hotel> {
    const newHotel = this.hotelRepository.create(payload);

    return this.hotelRepository.save(newHotel);
  }

  async update(id: number, payload: UpdateHotelDto): Promise<Hotel> {
    const hotel = await this.findOne(id);
    this.hotelRepository.merge(hotel, payload);
    return this.hotelRepository.save(hotel);
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findOne(id);
    return this.hotelRepository.softDelete(id);
  }
}
