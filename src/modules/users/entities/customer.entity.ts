import { Contract } from 'src/modules/contracts/entities/contracts.entity';
import { Offer } from 'src/modules/offers/entities/offers.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

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
    type: 'varchar',
    length: 254,
    nullable: false,
  })
  email: string;

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

  @OneToMany(() => Contract, (contract) => contract.customer)
  contracts: Contract[];

  @OneToMany(() => Offer, (e) => e.customer)
  offers: Offer[];
}
