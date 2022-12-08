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
import { SupplierProduct } from '../../suppliers/entities/supplier-products.entity';

@Entity()
export class OfferSupplierProduct {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'offer_id',
    nullable: false,
  })
  offerId: number;

  @Column({
    name: 'Supplier_product_id',
    nullable: false,
  })
  supplierProductId: number;

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
  cost: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    nullable: false,
  })
  price: number;

  @Column({
    name: 'promo_price',
    type: 'decimal',
    precision: 10,
    scale: 2,
    nullable: true,
  })
  promoPrice: number;

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

  @ManyToOne(() => Offer, (e) => e.offerSupplierProducts)
  @JoinColumn({ name: 'offer_id' })
  offer: Offer;

  @ManyToOne(() => SupplierProduct, (e) => e.offerSupplierProducts, {
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'Supplier_product_id' })
  supplierProduct: SupplierProduct;
}
