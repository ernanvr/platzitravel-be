import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
} from 'typeorm';
import { TransportCompanyProduct } from './transport-company-products.entity';

@Entity()
export class TicketType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'ticket_type',
    type: 'varchar',
    length: 64,
  })
  ticketType: string;

  ///////////////////////////////
  @CreateDateColumn({
    name: 'created_at',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
  })
  updatedAt: Date;

  @DeleteDateColumn({
    name: 'deleted_at',
  })
  deletedAt: Date;

  @OneToMany(() => TransportCompanyProduct, (e) => e.ticketType)
  transportCompanyProducts: TransportCompanyProduct;
}
