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
    nullable: false,
  })
  transportCompanyId: number;

  @Column({
    name: 'ticket_type_id',
    nullable: false,
  })
  ticketTypeId: number;

  @Column({
    name: 'origin_id',
    nullable: false,
  })
  originId: number;

  @Column({
    name: 'destination_id',
    nullable: false,
  })
  destinationId: number;

  @Column({
    type: 'integer',
    nullable: false,
  })
  quantity: number;

  @Column({
    type: 'decimal',
    precision: 2,
    scale: 2,
    nullable: false,
  })
  price: number;

  @Column({
    type: 'boolean',
    nullable: false,
    default: true,
  })
  active: boolean;

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
