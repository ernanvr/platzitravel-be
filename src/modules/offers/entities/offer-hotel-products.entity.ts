import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Offer } from '../../offers/entities/offers.entity';
import { HotelProduct } from '../../hotels/entities/hotel-products.entity';

@Entity()
export class OfferHotelProduct {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'offer_id',
    nullable: false,
  })
  offerId: number;

  @Column({
    name: 'hotel_product_id',
    nullable: false,
  })
  hotelProductId: number;

  @Column({
    type: 'integer',
    nullable: false,
  })
  quantity: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    nullable: false,
  })
  price: number;

  @Column({
    name: 'discount_percent',
    type: 'decimal',
    precision: 10,
    scale: 2,
    default: 0,
  })
  discountPercent: number;

  @Column({
    name: 'final_product_price',
    type: 'decimal',
    precision: 10,
    scale: 2,
    nullable: false,
  })
  finalProductPrice: number;

  @Column({
    type: 'text',
    nullable: true,
  })
  description: string;

  @Column({
    type: 'date',
    name: 'date_start',
    nullable: true,
  })
  startDate: Date;

  @Column({
    type: 'date',
    name: 'date_end',
    nullable: true,
  })
  endDate: Date;

  /////////////////////////////
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @ManyToOne(() => Offer, (e) => e.offerHotelProducts)
  @JoinColumn({ name: 'offer_id' })
  offer: Offer;

  @ManyToOne(() => HotelProduct, (e) => e.offerHotelProducts, {
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'hotel_product_id' })
  hotelProduct: HotelProduct;
}
