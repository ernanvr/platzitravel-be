import { IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateImageDto {
  @IsOptional()
  @Transform(({ value }) => parseInt(value))
  readonly hotelId?: number;

  @IsOptional()
  @Transform(({ value }) => parseInt(value))
  readonly hotelProductId?: number;

  @IsOptional()
  @Transform(({ value }) => parseInt(value))
  readonly transportCompanyId?: number;

  @IsOptional()
  @Transform(({ value }) => parseInt(value))
  readonly transportCompanyProductId?: number;
}
