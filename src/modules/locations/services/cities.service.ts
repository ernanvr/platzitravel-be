import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CreateCityDto, UpdateCityDto } from '../dtos/cities.dtos';
import { City } from '../entities/cities.entity';

@Injectable()
export class CitiesService {
  constructor(@InjectRepository(City) private cityRepo: Repository<City>) {}

  findAll(): Promise<City[]> {
    return this.cityRepo.find();
  }

  async findOne(id: number): Promise<City> {
    const city = await this.cityRepo.findOne({
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
    const newCity = this.cityRepo.create(payload);
    return this.cityRepo.save(newCity);
  }

  async update(id: number, body: UpdateCityDto): Promise<City> {
    const city = await this.findOne(id);
    this.cityRepo.merge(city, body);
    return this.cityRepo.save(city);
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findOne(id);
    return this.cityRepo.delete(id);
  }
}
