import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Hotel } from './hotels.entity';
import { RoomType } from './room-types.entity';

@Entity()
export class HotelProduct {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'hotel_id',
  })
  hotelId: number;

  @Column({
    name: 'room_type_id',
  })
  roomTypeId: number;

  @Column({
    type: 'integer',
  })
  quantity: number;

  @Column({
    name: 'service_price',
    type: 'decimal',
    precision: 10,
    scale: 2,
    default: 0,
  })
  servicePrice: number;

  @Column({
    type: 'text',
    nullable: true,
  })
  details: string;

  @Column({
    type: 'boolean',
    default: true,
  })
  active: boolean;

  @Column({
    name: 'pictures_url',
    type: 'varchar',
    array: true,
    nullable: true,
    length: 2083,
  })
  picturesUrl?: string;

  /////////////////////////////////////
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => RoomType, (roomtype) => roomtype.hotelProducts)
  @JoinColumn({ name: 'room_type_id' })
  roomType: RoomType;

  @ManyToOne(() => Hotel, (hotel) => hotel.hotelProducts)
  @JoinColumn({ name: 'hotel_id' })
  hotel: Hotel;
}
