import { Image } from '../../media/entities/image.entity';
import { City } from '../../locations/entities/cities.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  UpdateDateColumn,
  CreateDateColumn,
  DeleteDateColumn,
  OneToMany,
} from 'typeorm';
import { CompanyType } from './company-types.entity';
import { TransportCompanyProduct } from './transport-company-products.entity';

@Entity()
export class TransportCompany {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'company_name',
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  companyName: string;

  @Column({
    name: 'city_id',
    nullable: false,
  })
  cityId: number;

  @Column({
    name: 'hq_address',
    length: 255,
    type: 'varchar',
    nullable: false,
  })
  hqAddress: string;

  @Column({
    name: 'company_type_id',
    nullable: false,
  })
  companyTypeId: number;

  @Column({
    type: 'text',
    nullable: true,
  })
  description: string;

  @Column({
    name: 'is_partner',
    type: 'boolean',
    nullable: false,
  })
  isPartner: boolean;

  @Column({
    nullable: false,
    type: 'boolean',
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

  @ManyToOne(() => City, (e) => e.transportCompanies, {
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
    orphanedRowAction: 'soft-delete',
  })
  @JoinColumn({ name: 'city_id' })
  city: City;

  @ManyToOne(() => CompanyType, (e) => e.transportCompanies, {
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
    orphanedRowAction: 'soft-delete',
  })
  @JoinColumn({ name: 'company_type_id' })
  companyType: CompanyType;

  @OneToMany(() => TransportCompanyProduct, (e) => e.transportCompany, {
    cascade: false,
    eager: false,
  })
  transportCompanyProducts: TransportCompanyProduct[];

  @OneToMany(() => Image, (e) => e.transportCompanyProduct, {
    cascade: false,
    eager: false,
  })
  images: Image[];
}
