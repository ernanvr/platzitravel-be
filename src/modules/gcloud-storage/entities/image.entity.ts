import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  Column,
} from 'typeorm';

@Entity()
export class Image {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'hotel_id',
    type: 'integer',
    nullable: true,
  })
  hotelId: number;

  @Column({
    name: 'hotel_product_id',
    type: 'integer',
    nullable: true,
  })
  hotelProductId: number;

  @Column({
    name: 'transport_company_id',
    type: 'integer',
    nullable: true,
  })
  transportCompanyId: number;

  @Column({
    name: 'transport_company_product_id',
    type: 'integer',
    nullable: true,
  })
  transportCompanyProductId: number;

  //
  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
