import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  address: string;

  @Column()
  phone: string;

  @Column()
  mobile: string;

  @Column()
  email: string;

  @Column()
  details: string;

  @Column()
  customer_from: string;
}
