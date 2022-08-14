import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';
import {
  CreateTicketTypeDto,
  UpdateTicketTypeDto,
} from '../dtos/ticket-types.dtos';
import { TicketType } from '../entities/ticket-types.entity';

@Injectable()
export class TicketTypesService {
  constructor(
    @InjectRepository(TicketType)
    private ticketTypeRepository: Repository<TicketType>,
  ) {}

  findAll(): Promise<TicketType[]> {
    return this.ticketTypeRepository.find();
  }

  async findOne(id: number): Promise<TicketType> {
    const transportCompany = await this.ticketTypeRepository.findOne({
      where: { id },
    });

    if (!transportCompany) {
      throw new NotFoundException(`The transport company ${id} was not found`);
    }

    return transportCompany;
  }

  create(payload: CreateTicketTypeDto): Promise<TicketType> {
    const newTransportCompany = this.ticketTypeRepository.create(payload);

    return this.ticketTypeRepository.save(newTransportCompany);
  }

  async update(id: number, payload: UpdateTicketTypeDto): Promise<TicketType> {
    const transportCompany = await this.findOne(id);
    this.ticketTypeRepository.merge(transportCompany, payload);
    return this.ticketTypeRepository.save(transportCompany);
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findOne(id);
    return this.ticketTypeRepository.softDelete(id);
  }
}
