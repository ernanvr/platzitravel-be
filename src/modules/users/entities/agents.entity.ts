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
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { User } from './users.entity';

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
    type: 'integer',
    name: 'user_id',
    nullable: false,
  })
  userId: number;

  @Column({
    type: 'varchar',
    length: 64,
    nullable: false,
  })
  firstName: string;

  @Column({
    type: 'varchar',
    length: 64,
    nullable: false,
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

  @OneToOne(() => User, (e) => e.agent)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @OneToMany(() => Contract, (contract) => contract.agent, {
    cascade: true,
  })
  contracts: Contract[];

  @OneToMany(() => Offer, (e) => e.agent, {
    cascade: true,
  })
  offers: Offer[];
}
