import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Contracts {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'contract_code',
    type: 'varchar',
    length: 8,
  })
  contractCode: string;

  @Column({
    name: 'offer_id',
  })
  offerId: number;

  @Column({
    name: 'agent_id',
  })
  agentId: number;

  @Column({
    name: 'customer_id',
  })
  customer_id: number;

  @Column({
    name: 'time_signed',
    type: 'timestamp',
  })
  timeSigned: Date;

  @Column({
    name: 'total_price',
    type: 'decimal',
    precision: 10,
    scale: 2,
    default: 0,
  })
  totalPrice: number;

  @Column({
    name: 'payment_date',
    type: 'date',
  })
  paymentDate: Date;

  @Column({
    type: 'boolean',
    default: false,
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
    default: 0,
  })
  paymentAmount: number;

  @Column({
    type: 'boolean',
    nullable: true,
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
    default: 0,
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
}
