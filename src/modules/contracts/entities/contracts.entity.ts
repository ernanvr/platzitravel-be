import { Offer } from '../../offers/entities/offers.entity';
import { Agent } from '../../users/entities/agents.entity';
import { Customer } from '../../users/entities/customer.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity()
export class Contract {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'contract_code',
    type: 'varchar',
    length: 8,
    nullable: false,
  })
  contractCode: string;

  @Column({
    name: 'offer_id',
    nullable: false,
  })
  offerId: number;

  @Column({
    name: 'agent_id',
    nullable: false,
  })
  agentId: number;

  @Column({
    name: 'customer_id',
    nullable: false,
  })
  customer_id: number;

  @Column({
    name: 'time_signed',
    type: 'timestamp',
    nullable: true,
  })
  timeSigned: Date;

  @Column({
    name: 'total_price',
    type: 'decimal',
    precision: 10,
    scale: 2,
    nullable: false,
  })
  totalPrice: number;

  @Column({
    name: 'payment_date',
    type: 'date',
    nullable: true,
  })
  paymentDate: Date;

  @Column({
    type: 'boolean',
    default: false,
    nullable: false,
  })
  paid: boolean;

  @Column({
    name: 'payment_time',
    type: 'timestamp',
    nullable: true,
  })
  paymentTime: Date;

  @Column({
    name: 'payment_amount',
    type: 'decimal',
    precision: 10,
    scale: 2,
    nullable: true,
  })
  paymentAmount: number;

  @Column({
    type: 'boolean',
    default: false,
    nullable: false,
  })
  refunded: boolean;

  @Column({
    name: 'refunded_time',
    type: 'timestamp',
    nullable: true,
  })
  refundedTime: Date;

  @Column({
    name: 'refunded_amount',
    type: 'decimal',
    precision: 10,
    scale: 2,
    nullable: true,
  })
  refundedAmount: number;

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

  @ManyToOne(() => Agent, (agent) => agent.contracts, {
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
    orphanedRowAction: 'soft-delete',
  })
  @JoinColumn({ name: 'agent_id' })
  agent: Agent;

  @ManyToOne(() => Customer, (customer) => customer.contracts, {
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
    orphanedRowAction: 'soft-delete',
  })
  @JoinColumn({ name: 'customer_id' })
  customer: Customer;

  @ManyToOne(() => Offer, (e) => e.contracts, {
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
    orphanedRowAction: 'soft-delete',
  })
  @JoinColumn({ name: 'offer_id' })
  offer: Offer;
}
