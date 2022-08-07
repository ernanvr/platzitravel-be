import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CreateCityDto, UpdateCityDto } from '../dtos/cities.dtos';
import { City } from '../entities/cities.entity';

@Injectable()
export class CitiesService {
  constructor(
    @InjectRepository(City) private cityRepository: Repository<City>,
  ) {}

  findAll(): Promise<City[]> {
    return this.cityRepository.find();
  }

  async findOne(id: number): Promise<City> {
    const city = await this.cityRepository.findOne({
      where: {
        id: id,
      },
    });

    if (!city) {
      throw new NotFoundException(`City ${id} was not found`);
    }

    return city;
  }

  create(payload: CreateCityDto) {
    const newCity = this.cityRepository.create(payload);
    return this.cityRepository.save(newCity);
  }

  async update(id: number, body: UpdateCityDto): Promise<City> {
    const city = await this.findOne(id);
    this.cityRepository.merge(city, body);
    return this.cityRepository.save(city);
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findOne(id);
    return this.cityRepository.softDelete(id);
  }
}
