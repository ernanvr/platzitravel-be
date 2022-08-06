import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
} from 'typeorm';
import { City } from 'src/modules/locations/entities/cities.entity';

@Entity()
export class Hotel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'hotel_name',
    type: 'varchar',
    length: 255,
  })
  hotelName: string;

  @Column({
    name: 'city_id',
  })
  cityId: number;

  @Column({
    name: 'hotel_address',
    type: 'varchar',
    length: 255,
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

  @ManyToOne(() => City, (city) => city.hotels)
  @JoinColumn({ name: 'city_id' })
  city: City;
}
