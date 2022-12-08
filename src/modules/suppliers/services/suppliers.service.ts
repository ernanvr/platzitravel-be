import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CreateSupplierDto, UpdateSupplierDto } from '../dtos/suppliers.dto';
import { Supplier } from '../entities/suppliers.entity';

@Injectable()
export class SuppliersService {
  constructor(
    @InjectRepository(Supplier)
    private SupplierRepository: Repository<Supplier>,
  ) {}

  findAll(): Promise<Supplier[]> {
    return this.SupplierRepository.find();
  }

  async findOne(id: number): Promise<Supplier> {
    const Supplier = await this.SupplierRepository.findOne({
      where: { id },
    });

    if (!Supplier) {
      throw new NotFoundException(`Supplier ${id} does not exist`);
    }

    return Supplier;
  }

  create(payload: CreateSupplierDto): Promise<Supplier> {
    const newSupplier = this.SupplierRepository.create(payload);

    return this.SupplierRepository.save(newSupplier);
  }

  async update(id: number, payload: UpdateSupplierDto): Promise<Supplier> {
    const Supplier = await this.findOne(id);
    this.SupplierRepository.merge(Supplier, payload);
    return this.SupplierRepository.save(Supplier);
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findOne(id);
    return this.SupplierRepository.softDelete(id);
  }
}
