import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';
import {
  CreateTransportCompanyProductDto,
  UpdateTransportCompanyProductDto,
} from '../dtos/transport-company-products.dto';
import { TransportCompanyProduct } from '../entities/transport-company-products.entity';

@Injectable()
export class TransportCompanyProductsService {
  constructor(
    @InjectRepository(TransportCompanyProduct)
    private transportCompanyProductRepository: Repository<TransportCompanyProduct>,
  ) {}

  findAll(): Promise<TransportCompanyProduct[]> {
    return this.transportCompanyProductRepository.find();
  }

  async findOne(id: number): Promise<TransportCompanyProduct> {
    const transportCompanyProduct =
      await this.transportCompanyProductRepository.findOne({
        where: { id },
      });

    if (!transportCompanyProduct) {
      throw new NotFoundException(`The transport company ${id} was not found`);
    }

    return transportCompanyProduct;
  }

  create(
    payload: CreateTransportCompanyProductDto,
  ): Promise<TransportCompanyProduct> {
    const newTransportCompanyProduct =
      this.transportCompanyProductRepository.create(payload);
    return this.transportCompanyProductRepository.save(
      newTransportCompanyProduct,
    );
  }

  async update(
    id: number,
    payload: UpdateTransportCompanyProductDto,
  ): Promise<TransportCompanyProduct> {
    const transportCompany = await this.findOne(id);
    this.transportCompanyProductRepository.merge(transportCompany, payload);
    return this.transportCompanyProductRepository.save(transportCompany);
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findOne(id);
    return this.transportCompanyProductRepository.softDelete(id);
  }
}
