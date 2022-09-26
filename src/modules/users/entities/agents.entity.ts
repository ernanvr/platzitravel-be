import { Contract } from '../../contracts/entities/contracts.entity';
import { Offer } from '../../offers/entities/offers.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  DeleteDateColumn,
} from 'typeorm';

@Entity()
export class Agent {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'agent_code',
    type: 'varchar',
    length: 8,
    unique: true,
  })
  agentCode: string;

  @Column({
    type: 'varchar',
    length: 64,
  })
  firstName: string;

  @Column({
    type: 'varchar',
    length: 64,
  })
  lastname: string;

  @Column({
    type: 'boolean',
    default: true,
  })
  active: boolean;

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

  @OneToMany(() => Contract, (contract) => contract.agent, {
    cascade: true,
  })
  contracts: Contract[];

  @OneToMany(() => Offer, (e) => e.agent, {
    cascade: true,
  })
  offers: Offer[];
}
