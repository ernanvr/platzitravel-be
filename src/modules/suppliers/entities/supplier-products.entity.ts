import { OfferSupplierProduct } from '../../offers/entities/offer-supplier-products.entity';
import { PromoOfferSupplierProduct } from '../../promo-offers/entities/promo-offer-supplier-products.entity';
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
import { Supplier } from './suppliers.entity';
import { Image } from '../../media/entities/image.entity';

@Entity()
export class SupplierProduct {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'Supplier_id',
    nullable: false,
  })
  supplierId: number;

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
  cost: number;

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

  @ManyToOne(() => Supplier, (e) => e.supplierProducts, {
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
    orphanedRowAction: 'soft-delete',
  })
  @JoinColumn({ name: 'Supplier_id' })
  supplier: Supplier;

  @OneToMany(() => OfferSupplierProduct, (e) => e.supplierProduct, {
    cascade: true,
  })
  offerSupplierProducts: OfferSupplierProduct[];

  @OneToMany(() => PromoOfferSupplierProduct, (e) => e.supplierProduct, {
    cascade: true,
  })
  promoOfferSupplierProducts: PromoOfferSupplierProduct[];

  @OneToMany(() => Image, (e) => e.supplierProduct, {
    cascade: true,
  })
  images: Image[];
}
