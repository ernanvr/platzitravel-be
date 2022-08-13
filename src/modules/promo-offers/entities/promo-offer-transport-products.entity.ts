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
import { PromoOffer } from './promo-offers.entity';

@Entity()
export class PromoOfferTransportProduct {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'offer_id',
  })
  offerId: number;

  @Column({
    name: 'transport_product_id',
  })
  transportProductId: number;

  @Column({
    type: 'integer',
  })
  quantity: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
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
  })
  finalProductPrice: number;

  @Column({
    type: 'text',
    nullable: true,
  })
  description: string;

  /////////////////////////////
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @ManyToOne(() => PromoOffer, (e) => e.promoOfferTransportProducts)
  @JoinColumn({ name: 'offer_id' })
  promoOffer: PromoOffer;
}
