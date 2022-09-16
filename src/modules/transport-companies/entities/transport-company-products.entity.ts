import { Station } from 'src/modules/locations/entities/stations.entity';
import { PromoOfferTransportProduct } from 'src/modules/promo-offers/entities/promo-offer-transport-products.entity';
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
import { TicketType } from './ticket-types.entity';
import { TransportCompany } from './transport-companies.entity';

@Entity()
export class TransportCompanyProduct {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'transport_company_id',
    nullable: false,
  })
  transportCompanyId: number;

  @Column({
    name: 'ticket_type_id',
    nullable: false,
  })
  ticketTypeId: number;

  @Column({
    name: 'origin_id',
    nullable: false,
  })
  originId: number;

  @Column({
    name: 'destination_id',
    nullable: false,
  })
  destinationId: number;

  @Column({
    type: 'integer',
    nullable: false,
  })
  quantity: number;

  @Column({
    type: 'decimal',
    precision: 2,
    scale: 2,
    nullable: false,
  })
  price: number;

  @Column({
    type: 'boolean',
    nullable: false,
    default: true,
  })
  active: boolean;

  ///////////////////////////////
  @CreateDateColumn({
    name: 'created_at',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
  })
  updatedAt: Date;

  @DeleteDateColumn({
    name: 'deleted_at',
  })
  deletedAt: Date;

  @ManyToOne(() => TicketType, (e) => e.transportCompanyProducts, {
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
    orphanedRowAction: 'soft-delete',
  })
  @JoinColumn({ name: 'ticket_type_id' })
  ticketType: TicketType;

  @ManyToOne(() => TransportCompany, (e) => e.transportCompanyProducts, {
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
    orphanedRowAction: 'soft-delete',
  })
  @JoinColumn({ name: 'transport_company_id' })
  transportCompany: TransportCompany;

  @ManyToOne(() => Station, (e) => e.transportCompanyProductsOrigin, {
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
    orphanedRowAction: 'soft-delete',
  })
  @JoinColumn({ name: 'origin_id' })
  origin: Station;

  @ManyToOne(() => Station, (e) => e.transportCompanyProductsDestination, {
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
    orphanedRowAction: 'soft-delete',
  })
  @JoinColumn({ name: 'destination_id' })
  destination: Station;

  @OneToMany(
    () => PromoOfferTransportProduct,
    (e) => e.transportCompanyProduct,
    {
      cascade: true,
    },
  )
  promoOfferTransportProducts: PromoOfferTransportProduct[];
}
