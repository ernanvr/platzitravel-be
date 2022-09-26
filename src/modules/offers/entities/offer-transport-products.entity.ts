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

@Entity()
export class OfferTransportProduct {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'offer_id',
    nullable: false,
  })
  offerId: number;

  @Column({
    name: 'transport_product_id',
    nullable: false,
  })
  transportProductId: number;

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

  /////////////////////////////
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @ManyToOne(() => Offer, (e) => e.offerTransportProducts)
  @JoinColumn({ name: 'offer_id' })
  offer: Offer;
}
