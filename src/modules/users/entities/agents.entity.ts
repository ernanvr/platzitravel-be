import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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
}
