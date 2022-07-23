import { City } from 'src/modules/cities/entities/cities.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Country {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 8,
    unique: true,
  })
  country_code: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  country_name: string;

  @OneToMany(() => City, (city) => city.country)
  cities: City[];
}
