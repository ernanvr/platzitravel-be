import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { City } from './cities.entity';
import { StationType } from './station-types.entity';

@Entity()
export class Station {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'station_name',
    type: 'varchar',
    length: 85,
  })
  stationName: string;

  @Column({
    name: 'station_code',
    type: 'varchar',
    length: 10,
  })
  stationCode: string;

  @Column({
    name: 'station_type_id',
  })
  stationTypeId: number;

  @Column({
    name: 'city_id',
  })
  cityId: number;

  //////////////////////////////
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => StationType, (e) => e.stations, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    orphanedRowAction: 'delete',
    nullable: false,
  })
  @JoinColumn({ name: 'station_type_id' })
  stationType: StationType;

  @ManyToOne(() => City, (e) => e.stations, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    orphanedRowAction: 'delete',
    nullable: false,
  })
  @JoinColumn({ name: 'city_id' })
  city: City;
}
