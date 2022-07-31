import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Country } from '../../countries/entities/countries.entity';
import { Hotel } from 'src/modules/hotels/entities/hotels.entity';
import { TransportCompany } from 'src/modules/transport-companies/entities/transport-companies.entity';

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

  @OneToMany(() => Hotel, (hotel) => hotel.city)
  hotels: Hotel[];

  @OneToMany(
    () => TransportCompany,
    (transportCompany) => transportCompany.city,
  )
  transportCompanies: TransportCompany[];
}
