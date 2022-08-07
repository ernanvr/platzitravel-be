import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';
import { StationType } from '../entities/station-types.entity';
import {
  CreateStationTypeDto,
  UpdateStationTypeDto,
} from '../dtos/station-types.dtos';

@Injectable()
export class StationTypesService {
  constructor(
    @InjectRepository(StationType)
    private stationTypeRepository: Repository<StationType>,
  ) {}

  findAll(): Promise<StationType[]> {
    return this.stationTypeRepository.find();
  }

  async findOne(id: number): Promise<StationType> {
    const stationType = await this.stationTypeRepository.findOne({
      where: {
        id: id,
      },
    });

    if (!stationType) {
      throw new NotFoundException(`StationType ${id} was not found`);
    }

    return stationType;
  }

  create(payload: CreateStationTypeDto) {
    const newStation = this.stationTypeRepository.create(payload);
    return this.stationTypeRepository.save(newStation);
  }

  async update(id: number, body: UpdateStationTypeDto): Promise<StationType> {
    const stationType = await this.findOne(id);
    this.stationTypeRepository.merge(stationType, body);
    return this.stationTypeRepository.save(stationType);
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findOne(id);
    return this.stationTypeRepository.softDelete(id);
  }
}
