import { Contract } from 'src/modules/contracts/entities/contracts.entity';
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
  })
  firstname: string;

  @Column({
    type: 'varchar',
    length: 64,
  })
  lastname: string;

  @Column({
    type: 'varchar',
    length: 255,
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
  })
  mobile: string;

  @Column({
    type: 'varchar',
    length: 254,
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
}
