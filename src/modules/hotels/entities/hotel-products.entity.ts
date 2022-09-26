import { OfferHotelProduct } from '../../offers/entities/offer-hotel-products.entity';
import { PromoOfferHotelProduct } from '../../promo-offers/entities/promo-offer-hotel-products.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  DeleteDateColumn,
  OneToMany,
} from 'typeorm';
import { Hotel } from './hotels.entity';
import { RoomType } from './room-types.entity';
import { Image } from '../../media/entities/image.entity';

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

  /////////////////////////////////////
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @ManyToOne(() => RoomType, (roomtype) => roomtype.hotelProducts, {
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
    orphanedRowAction: 'soft-delete',
  })
  @JoinColumn({ name: 'room_type_id' })
  roomType: RoomType;

  @ManyToOne(() => Hotel, (hotel) => hotel.hotelProducts, {
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
    orphanedRowAction: 'soft-delete',
  })
  @JoinColumn({ name: 'hotel_id' })
  hotel: Hotel;

  @OneToMany(() => OfferHotelProduct, (e) => e.hotelProduct, {
    cascade: true,
  })
  offerHotelProducts: OfferHotelProduct[];

  @OneToMany(() => PromoOfferHotelProduct, (e) => e.hotelProduct, {
    cascade: true,
  })
  promoOfferHotelProducts: PromoOfferHotelProduct[];

  @OneToMany(() => Image, (e) => e.hotelProduct, {
    cascade: true,
  })
  images: Image[];
}
