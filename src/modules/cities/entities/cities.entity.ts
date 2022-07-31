import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Country } from '../../countries/entities/countries.entity';

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

  @ManyToOne(() => Country, (country) => country.cities)
  @JoinColumn({ name: 'country_id' })
  country: Country;
}
