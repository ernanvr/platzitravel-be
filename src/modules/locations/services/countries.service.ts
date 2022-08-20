import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CreateCountryDto, UpdateCountryDto } from '../dtos/countries.dto';
import { Country } from '../entities/countries.entity';

@Injectable()
export class CountriesService {
  constructor(
    @InjectRepository(Country) private countryRepository: Repository<Country>,
  ) {}

  findAll(): Promise<Country[]> {
    return this.countryRepository.find({
      relations: {
        cities: true,
      },
    });
  }

  async findOne(id: number): Promise<Country> {
    const country = await this.countryRepository.findOne({
      relations: {
        cities: true,
      },
      where: {
        id,
      },
    });
    if (!country) {
      throw new NotFoundException(`Country ${id} was not found`);
    }
    return country;
  }

  create(payload: CreateCountryDto): Promise<Country> {
    const newCountry = this.countryRepository.create(payload);

    return this.countryRepository.save(newCountry);
  }

  async update(id: number, payload: UpdateCountryDto): Promise<Country> {
    const country = await this.findOne(id);
    this.countryRepository.merge(country, payload);
    return this.countryRepository.save(country);
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findOne(id);
    return this.countryRepository.softDelete(id);
  }
}
