import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { Station } from './stations.entity';

@Entity()
export class StationType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'type_name',
    length: 50,
  })
  typeName: string;

  //////////////////////////////
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Station, (e) => e.stationType)
  stations: Station[];
}
