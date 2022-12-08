import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  OneToMany,
  DeleteDateColumn,
} from 'typeorm';
import { City } from '../../locations/entities/cities.entity';
import { SupplierProduct } from './supplier-products.entity';
import { Image } from '../../media/entities/image.entity';
import { CompanyType } from './company-types.entity';

@Entity()
export class Supplier {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'name',
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  name: string;

  @Column({
    name: 'city_id',
    nullable: false,
  })
  cityId: number;

  @Column({
    name: 'supplier_address',
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  address: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  details: string;

  @Column({
    name: 'is_partner',
    type: 'boolean',
    nullable: false,
  })
  isPartner: boolean;

  @Column({
    type: 'boolean',
    default: true,
  })
  active: boolean;

  @Column({
    name: 'company_type_id',
    nullable: false,
  })
  companyTypeId: number;

  ///////////////////////////////
  @CreateDateColumn({
    name: 'created_at',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
  })
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @ManyToOne(() => City, (city) => city.suppliers, {
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
    orphanedRowAction: 'soft-delete',
  })
  @JoinColumn({ name: 'city_id' })
  city: City;

  @OneToMany(
    () => SupplierProduct,
    (SupplierProduct) => SupplierProduct.supplier,
    {
      cascade: true,
    },
  )
  supplierProducts: SupplierProduct[];

  @OneToMany(() => Image, (e) => e.supplier, {
    cascade: true,
  })
  images: Image[];

  @ManyToOne(() => CompanyType, (e) => e.suppliers, {
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
    orphanedRowAction: 'soft-delete',
  })
  @JoinColumn({ name: 'company_type_id' })
  companyType: CompanyType;
}
