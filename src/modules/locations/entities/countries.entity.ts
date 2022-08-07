import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { City } from './cities.entity';

@Entity()
export class Country {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'country_code',
    type: 'varchar',
    length: 8,
  })
  countryCode: string;

  @Column({
    name: 'country_name',
    type: 'varchar',
    length: 64,
  })
  countryName: string;

  @OneToMany(() => City, (city) => city.country)
  cities: City[];
}
