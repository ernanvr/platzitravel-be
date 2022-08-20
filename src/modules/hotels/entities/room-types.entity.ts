import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  OneToMany,
  DeleteDateColumn,
} from 'typeorm';
import { HotelProduct } from './hotel-products.entity';

@Entity()
export class RoomType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 50,
    nullable: false,
  })
  description: string;

  ///////////////////////////////
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @OneToMany(() => HotelProduct, (hotelProduct) => hotelProduct.roomType, {
    cascade: true,
  })
  hotelProducts: HotelProduct[];
}
