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
import { City } from 'src/modules/locations/entities/cities.entity';
import { HotelProduct } from './hotel-products.entity';

@Entity()
export class Hotel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'hotel_name',
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  hotelName: string;

  @Column({
    name: 'city_id',
    nullable: false,
  })
  cityId: number;

  @Column({
    name: 'hotel_address',
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  hotelAddress: string;

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
    name: 'pictures_url',
    array: true,
    type: 'varchar',
    nullable: true,
  })
  picturesUrl: string[];

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

  @ManyToOne(() => City, (city) => city.hotels, {
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
    orphanedRowAction: 'soft-delete',
  })
  @JoinColumn({ name: 'city_id' })
  city: City;

  @OneToMany(() => HotelProduct, (hotelProduct) => hotelProduct.hotel, {
    cascade: true,
  })
  hotelProducts: HotelProduct[];
}
