import { Agent } from 'src/modules/users/entities/agents.entity';
import { Customer } from 'src/modules/users/entities/customer.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class Contract {
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
    nullable: true,
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
    nullable: true,
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
    default: false,
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

  @ManyToOne(() => Agent, (agent) => agent.contracts)
  @JoinColumn({ name: 'agent_id' })
  agent: Agent;

  @ManyToOne(() => Customer, (customer) => customer.contracts)
  @JoinColumn({ name: 'customer_id' })
  customer: Customer;
}
