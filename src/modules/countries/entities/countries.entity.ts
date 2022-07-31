import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { City } from '../../cities/entities/cities.entity';

@Entity()
export class Country {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'country_code',
    type: 'varchar',
    length: 8,
    nullable: false,
  })
  countryCode: string;

  @Column({
    name: 'country_name',
    type: 'varchar',
    length: 64,
    nullable: false,
  })
  countryName: string;

  @OneToMany(() => City, (city) => city.country)
  cities: City[];
}
