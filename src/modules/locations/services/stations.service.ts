import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';
import { Station } from '../entities/stations.entity';
import { CreateStationDto, UpdateStationDto } from '../dtos/stations.dtos';

@Injectable()
export class StationsService {
  constructor(
    @InjectRepository(Station) private stationRepository: Repository<Station>,
  ) {}

  findAll(): Promise<Station[]> {
    return this.stationRepository.find();
  }

  async findOne(id: number): Promise<Station> {
    const station = await this.stationRepository.findOne({
      where: {
        id: id,
      },
    });

    if (!station) {
      throw new NotFoundException(`Station ${id} was not found`);
    }

    return station;
  }

  create(payload: CreateStationDto) {
    const newStation = this.stationRepository.create(payload);
    return this.stationRepository.save(newStation);
  }

  async update(id: number, body: UpdateStationDto): Promise<Station> {
    const station = await this.findOne(id);
    this.stationRepository.merge(station, body);
    return this.stationRepository.save(station);
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findOne(id);
    return this.stationRepository.delete(id);
  }
}
