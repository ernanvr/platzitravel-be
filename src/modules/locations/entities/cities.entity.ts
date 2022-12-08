import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Country } from './countries.entity';
import { Supplier } from '../../suppliers/entities/suppliers.entity';

@Entity()
export class City {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'city_name',
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  cityName: string;

  @Column({
    nullable: false,
    name: 'country_id',
  })
  countryId: number;

  @ManyToOne(() => Country, (country) => country.cities, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    orphanedRowAction: 'soft-delete',
  })
  @JoinColumn({ name: 'country_id' })
  country: Country;

  @OneToMany(() => Supplier, (e) => e.city, {
    cascade: true,
  })
  suppliers: Supplier[];
}
