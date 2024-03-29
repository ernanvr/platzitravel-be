import {
  Entity,
  Column,
  OneToMany,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';
import { Offer } from '../../offers/entities/offers.entity';
import { PromoOfferSupplierProduct } from '../../promo-offers/entities/promo-offer-supplier-products.entity';

@Entity()
export class PromoOffer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'offer_code',
    type: 'varchar',
    length: 8,
    nullable: false,
  })
  promoOfferCode: string;

  @Column({
    name: 'offer_name',
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  promoOfferName: string;

  @Column({
    name: 'active_from',
    type: 'date',
    nullable: false,
  })
  activeFrom: Date;

  @Column({
    name: 'active_to',
    type: 'date',
    nullable: false,
  })
  activeTo: Date;

  ///////////////////////////////
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @OneToMany(() => Offer, (e) => e.promoOffer, {
    cascade: true,
  })
  offers: Offer[];

  @OneToMany(() => PromoOfferSupplierProduct, (e) => e.promoOffer, {
    cascade: true,
  })
  promoOfferSupplierProducts: PromoOfferSupplierProduct[];
}
