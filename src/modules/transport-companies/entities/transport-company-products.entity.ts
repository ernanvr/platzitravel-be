import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { TicketType } from './ticket-types.entity';

@Entity()
export class TransportCompanyProduct {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'transport_company_id',
  })
  transportCompanyId: number;

  @Column({
    name: 'ticket_type_id',
  })
  ticketTypeId: number;

  @Column({
    name: 'origin_id',
  })
  originId: number;

  @Column({
    name: 'destination_id',
  })
  destinationId: number;

  @Column({
    type: 'integer',
  })
  quantity: number;

  @Column({
    type: 'decimal',
    precision: 2,
    scale: 2,
  })
  price: number;

  @Column({
    name: 'pictures_url',
    type: 'varchar',
    array: true,
    length: 255,
    nullable: true,
  })
  picturesUrl: Array<string>;

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

  @ManyToOne(() => TicketType, (e) => e.transportCompanyProducts)
  @JoinColumn({ name: 'ticket_type_id' })
  ticketType: TicketType;
}
