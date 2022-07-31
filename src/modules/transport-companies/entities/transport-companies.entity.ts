import { City } from 'src/modules/cities/entities/cities.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class TransportCompany {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'company_name',
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  companyName: string;

  @Column({
    name: 'city_id',
    nullable: false,
  })
  cityId: number;

  @Column({
    name: 'hq_address',
    length: 255,
    type: 'varchar',
    nullable: false,
  })
  hqAddress: string;

  @Column({
    name: 'company_type_id',
    nullable: false,
  })
  companyTypeId: number;

  @Column({
    type: 'text',
    nullable: true,
  })
  description: string;

  @Column({
    name: 'is_partner',
    type: 'boolean',
    nullable: false,
  })
  isPartner: boolean;

  @Column({
    nullable: false,
    type: 'boolean',
  })
  active: boolean;

  @Column({
    name: 'pictures_url',
    type: 'varchar',
    array: true,
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

  @ManyToOne(() => City, (city) => city.transportCompanies)
  @JoinColumn({ name: 'city_id' })
  city: City;
}