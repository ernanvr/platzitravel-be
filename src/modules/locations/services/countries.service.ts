import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCountryDto, UpdateCountryDto } from '../dtos/countries.dtos';
import { Country } from '../entities/countries.entity';

@Injectable()
export class CountriesService {
  constructor(
    @InjectRepository(Country) private countryRepo: Repository<Country>,
  ) {}

  findAll() {
    return this.countryRepo.find({
      relations: {
        cities: true,
      },
    });
  }

  findOne(id: number) {
    const country = this.countryRepo.findOne({
      relations: {
        cities: true,
      },
      where: {
        id,
      },
    });
    if (!country) {
      throw new NotFoundException(`City ${id} was not found`);
    }
    return country;
  }

  create(payload: CreateCountryDto) {
    const newCountry = this.countryRepo.create(payload);

    return this.countryRepo.save(newCountry);
  }

  async update(id: number, payload: UpdateCountryDto) {
    const country = await this.countryRepo.findOne({
      relations: {
        cities: true,
      },
      where: {
        id,
      },
    });
    if (!country) {
      throw new NotFoundException(`City ${id} was not found`);
    }
    this.countryRepo.merge(country, payload);
    return this.countryRepo.save(country);
  }

  async delete(id: number) {
    await this.countryRepo.delete(id);

    return true;
  }
}
