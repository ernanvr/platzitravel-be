import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';
import { HotelProduct } from './hotel-products.entity';

@Entity()
export class RoomType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 50,
  })
  description: string;

  ///////////////////////////////
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => HotelProduct, (hotelProduct) => hotelProduct.roomType)
  hotelProducts: HotelProduct[];
}
