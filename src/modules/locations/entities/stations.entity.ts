import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  DeleteDateColumn,
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
    nullable: false,
  })
  stationName: string;

  @Column({
    name: 'station_code',
    type: 'varchar',
    length: 10,
    nullable: false,
  })
  stationCode: string;

  @Column({
    name: 'station_type_id',
    nullable: false,
  })
  stationTypeId: number;

  @Column({
    name: 'city_id',
    nullable: false,
  })
  cityId: number;

  //////////////////////////////
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @ManyToOne(() => StationType, (e) => e.stations, {
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
    orphanedRowAction: 'soft-delete',
    nullable: false,
  })
  @JoinColumn({ name: 'station_type_id' })
  stationType: StationType;

  @ManyToOne(() => City, (e) => e.stations, {
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
    orphanedRowAction: 'soft-delete',
    nullable: false,
  })
  @JoinColumn({ name: 'city_id' })
  city: City;
}
