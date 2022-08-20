import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  DeleteDateColumn,
} from 'typeorm';
import { Station } from './stations.entity';

@Entity()
export class StationType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'type_name',
    length: 50,
    nullable: false,
  })
  stationTypeName: string;

  //////////////////////////////
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @OneToMany(() => Station, (e) => e.stationType)
  stations: Station[];
}
