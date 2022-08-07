import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { StationType } from './station-types.entity';

@Entity()
export class Station {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 85,
  })
  name: string;

  @Column({
    type: 'varchar',
    length: 10,
  })
  code: string;

  @Column({
    name: 'station_type_id',
  })
  stationTypeId: number;

  //////////////////////////////
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => StationType, (e) => e.stations)
  @JoinColumn({ name: 'station_type_id' })
  stationType: StationType;
}
