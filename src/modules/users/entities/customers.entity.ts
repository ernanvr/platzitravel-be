import { Contract } from '../../contracts/entities/contracts.entity';
import { Offer } from '../../offers/entities/offers.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { User } from './users.entity';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'integer',
    nullable: false,
    name: 'user_id',
  })
  userId: number;

  @Column({
    type: 'varchar',
    length: 64,
    nullable: false,
  })
  firstname: string;

  @Column({
    type: 'varchar',
    length: 64,
    nullable: false,
  })
  lastname: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  address: string;

  @Column({
    type: 'varchar',
    length: 32,
    nullable: true,
  })
  phone: string;

  @Column({
    type: 'varchar',
    length: 32,
    nullable: false,
  })
  mobile: string;

  @Column({
    name: 'text',
    nullable: true,
  })
  details: string;

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

  @OneToOne(() => User, (e) => e.customer)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @OneToMany(() => Contract, (contract) => contract.customer, {
    cascade: true,
  })
  contracts: Contract[];

  @OneToMany(() => Offer, (e) => e.customer, {
    cascade: true,
  })
  offers: Offer[];
}
