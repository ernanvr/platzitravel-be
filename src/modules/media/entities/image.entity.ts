import { HotelProduct } from 'src/modules/hotels/entities/hotel-products.entity';
import { Hotel } from 'src/modules/hotels/entities/hotels.entity';
import { TransportCompany } from 'src/modules/transport-companies/entities/transport-companies.entity';
import { TransportCompanyProduct } from 'src/modules/transport-companies/entities/transport-company-products.entity';
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
    name: 'hotel_id',
    type: 'integer',
    nullable: true,
  })
  hotelId?: number;

  @Column({
    name: 'hotel_product_id',
    type: 'integer',
    nullable: true,
  })
  hotelProductId?: number;

  @Column({
    name: 'transport_company_id',
    type: 'integer',
    nullable: true,
  })
  transportCompanyId?: number;

  @Column({
    name: 'transport_company_product_id',
    type: 'integer',
    nullable: true,
  })
  transportCompanyProductId?: number;

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

  @ManyToOne(() => Hotel, (e) => e.images, {
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
    orphanedRowAction: 'soft-delete',
  })
  @JoinColumn({ name: 'hotel_id' })
  hotel: Hotel;

  @ManyToOne(() => HotelProduct, (e) => e.images, {
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
    orphanedRowAction: 'soft-delete',
  })
  @JoinColumn({ name: 'hotel_product_id' })
  hotelProduct: HotelProduct;

  @ManyToOne(() => TransportCompany, (e) => e.images, {
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
    orphanedRowAction: 'soft-delete',
  })
  @JoinColumn({ name: 'transport_company_id' })
  transportCompany: TransportCompany;

  @ManyToOne(() => TransportCompanyProduct, (e) => e.images, {
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
    orphanedRowAction: 'soft-delete',
  })
  @JoinColumn({ name: 'transport_company_product_id' })
  transportCompanyProduct: TransportCompanyProduct;
}
