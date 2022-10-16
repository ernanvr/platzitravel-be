import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { PromoOffer } from '../../promo-offers/entities/promo-offers.entity';
import { Agent } from '../../users/entities/agents.entity';
import { Customer } from '../../users/entities/customers.entity';
import { OfferHotelProduct } from './offer-hotel-products.entity';
import { OfferTransportProduct } from './offer-transport-products.entity';
import { Contract } from '../../contracts/entities/contracts.entity';

@Entity()
export class Offer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'promo_offer_id',
    nullable: false,
  })
  promoOfferId: number;

  @Column({
    name: 'agent_id',
    nullable: false,
  })
  agentId: number;

  @Column({
    name: 'customer_id',
    nullable: false,
  })
  customerId: number;

  @Column({
    name: 'offer_code',
    type: 'varchar',
    length: 8,
    nullable: false,
  })
  offerCode: string;

  @Column({
    name: 'offer_name',
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  offerName: string;

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

  @Column({
    name: 'time_accepted',
    type: 'timestamp',
    nullable: true,
  })
  timeAccepted: Date;

  @Column({
    type: 'boolean',
    default: false,
  })
  accepted: boolean;

  ///////////////////////////////
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @ManyToOne(() => Agent, (e) => e.offers)
  @JoinColumn({ name: 'agent_id' })
  agent: Agent;

  @ManyToOne(() => Customer, (e) => e.offers)
  @JoinColumn({ name: 'customer_id' })
  customer: Customer;

  @ManyToOne(() => PromoOffer, (e) => e.offers)
  @JoinColumn({ name: 'promo_offer_id' })
  promoOffer: PromoOffer;

  @OneToMany(() => OfferTransportProduct, (e) => e.offer)
  offerTransportProducts: OfferTransportProduct[];

  @OneToMany(() => OfferHotelProduct, (e) => e.offer)
  offerHotelProducts: OfferHotelProduct[];

  @OneToMany(() => Contract, (e) => e.offer)
  contracts: Contract[];
}
