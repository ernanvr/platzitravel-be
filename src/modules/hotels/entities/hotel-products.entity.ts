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
    nullable: false,
  })
  hotelId: number;

  @Column({
    name: 'room_type_id',
    nullable: false,
  })
  roomTypeId: number;

  @Column({
    type: 'integer',
    nullable: false,
  })
  quantity: number;

  @Column({
    name: 'service_price',
    type: 'decimal',
    precision: 10,
    scale: 2,
    nullable: false,
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
    nullable: false,
  })
  active: boolean;

  @Column({
    name: 'pictures_url',
    type: 'varchar',
    array: true,
    nullable: true,
    length: 2083,
  })
  picturesUrl?: string[];

  /////////////////////////////////////
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => RoomType, (roomtype) => roomtype.hotelProducts)
  @JoinColumn({ name: 'room_type_id' })
  roomType: RoomType;

  @ManyToOne(() => Hotel, (hotel) => hotel.hotelProducts, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    orphanedRowAction: 'delete',
  })
  @JoinColumn({ name: 'hotel_id' })
  hotel: Hotel;
}
