import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity()
export class PromoOffer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'offer_code',
    type: 'varchar',
    length: 8,
  })
  promoOfferCode: string;

  @Column({
    name: 'offer_name',
    type: 'varchar',
    length: 255,
  })
  promoOfferName: string;

  @Column({
    name: 'active_from',
    type: 'date',
  })
  activeFrom: Date;

  @Column({
    name: 'active_to',
    type: 'date',
  })
  activeTo: Date;

  ///////////////////////////////
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}