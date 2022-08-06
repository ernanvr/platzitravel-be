import { Contract } from 'src/modules/contracts/entities/contracts.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

@Entity()
export class Agent {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'agent_code',
    type: 'varchar',
    length: 8,
    unique: true,
  })
  agentCode: string;

  @Column({
    type: 'varchar',
    length: 64,
  })
  firstName: string;

  @Column({
    type: 'varchar',
    length: 64,
  })
  lastname: string;

  @Column({
    type: 'boolean',
    default: true,
  })
  active: boolean;

  ///////////////////////////////
  @CreateDateColumn({
    name: 'created_at',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
  })
  updatedAt: Date;

  @OneToMany(() => Contract, (contract) => contract.agent)
  contracts: Contract[];
}
