import {
  Entity,
  Column,
  OneToMany,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';
import { Offer } from 'src/modules/offers/entities/offers.entity';
import { PromoOfferTransportProduct } from './promo-offer-transport-products.entity';
import { PromoOfferHotelProduct } from './promo-offer-hotel-products.entity';

@Entity()
export class PromoOffer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'offer_code',
    type: 'varchar',
    length: 8,
  })
  promoOfferCode: string;

  @Column({
    name: 'offer_name',
    type: 'varchar',
    length: 255,
  })
  promoOfferName: string;

  @Column({
    name: 'active_from',
    type: 'date',
  })
  activeFrom: Date;

  @Column({
    name: 'active_to',
    type: 'date',
  })
  activeTo: Date;

  ///////////////////////////////
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @OneToMany(() => Offer, (e) => e.promoOffer)
  offers: Offer[];

  @OneToMany(() => PromoOfferTransportProduct, (e) => e.promoOffer)
  promoOfferTransportProducts: PromoOfferTransportProduct[];

  @OneToMany(() => PromoOfferHotelProduct, (e) => e.promoOffer)
  promoOfferHotelProducts: PromoOfferHotelProduct[];
}
