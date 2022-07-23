import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Country } from 'src/modules/countries/entities/countries.entities';

@Entity()
export class City {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 255,
    unique: false,
  })
  name: string;

  @ManyToOne(() => Country, (country) => country.cities)
  country: Country;
}
