import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CreateRoomType, UpdateRoomType } from '../dtos/room-types.dto';
import { RoomType } from '../entities/room-types.entity';

@Injectable()
export class RoomTypesService {
  constructor(
    @InjectRepository(RoomType)
    private roomTypeRepository: Repository<RoomType>,
  ) {}

  findAll(): Promise<RoomType[]> {
    return this.roomTypeRepository.find();
  }

  async findOne(id: number): Promise<RoomType> {
    const roomtype = await this.roomTypeRepository.findOne({
      where: { id },
    });

    if (!roomtype) {
      throw new NotFoundException(`Room type ${id} was not found`);
    }

    return roomtype;
  }

  create(payload: CreateRoomType): Promise<RoomType> {
    const newRoomType = this.roomTypeRepository.create(payload);
    return this.roomTypeRepository.save(newRoomType);
  }

  async update(id: number, payload: UpdateRoomType): Promise<RoomType> {
    const roomtype = await this.findOne(id);
    this.roomTypeRepository.merge(roomtype, payload);
    return this.roomTypeRepository.save(roomtype);
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findOne(id);
    return this.roomTypeRepository.softDelete(id);
  }
}
