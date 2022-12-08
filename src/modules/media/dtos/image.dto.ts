import { IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateImageDto {
  @IsOptional()
  @Transform(({ value }) => parseInt(value))
  readonly supplierId?: number;

  @IsOptional()
  @Transform(({ value }) => parseInt(value))
  readonly supplierProductId?: number;
}
