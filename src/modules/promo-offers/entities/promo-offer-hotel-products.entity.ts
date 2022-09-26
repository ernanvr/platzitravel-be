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
import { PromoOffer } from '../../promo-offers/entities/promo-offers.entity';
import { HotelProduct } from '../../hotels/entities/hotel-products.entity';

@Entity()
export class PromoOfferHotelProduct {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'promo_offer_id',
    nullable: false,
  })
  promoOfferId: number;

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

  @ManyToOne(() => PromoOffer, (e) => e.promoOfferTransportProducts, {
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
    orphanedRowAction: 'soft-delete',
  })
  @JoinColumn({ name: 'promo_offer_id' })
  promoOffer: PromoOffer;

  @ManyToOne(() => HotelProduct, (e) => e.offerHotelProducts, {
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
    orphanedRowAction: 'soft-delete',
  })
  @JoinColumn({ name: 'hotel_product_id' })
  hotelProduct: HotelProduct;
}
