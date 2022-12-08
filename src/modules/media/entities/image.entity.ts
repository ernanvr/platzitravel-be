import { SupplierProduct } from '../../suppliers/entities/supplier-products.entity';
import { Supplier } from '../../suppliers/entities/suppliers.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class Image {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'Supplier_id',
    type: 'integer',
    nullable: true,
  })
  supplierId?: number;

  @Column({
    name: 'Supplier_product_id',
    type: 'integer',
    nullable: true,
  })
  supplierProductId?: number;

  @Column({
    type: 'varchar',
    length: 100,
    nullable: false,
  })
  filename: string;

  @Column({
    type: 'varchar',
    length: 254,
    nullable: false,
  })
  url: string;

  @Column({
    type: 'varchar',
    length: 100,
    nullable: false,
  })
  bucket: string;

  //
  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;

  @ManyToOne(() => Supplier, (e) => e.images, {
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
    orphanedRowAction: 'soft-delete',
  })
  @JoinColumn({ name: 'Supplier_id' })
  supplier: Supplier;

  @ManyToOne(() => SupplierProduct, (e) => e.images, {
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
    orphanedRowAction: 'soft-delete',
  })
  @JoinColumn({ name: 'Supplier_product_id' })
  supplierProduct: SupplierProduct;
}
