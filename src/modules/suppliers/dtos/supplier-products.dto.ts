import {
  IsString,
  IsNumber,
  IsNotEmpty,
  IsPositive,
  IsBoolean,
} from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateSupplierProductDto {
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  readonly supplierId: number;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  readonly roomTypeId: number;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  readonly quantity: number;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  readonly cost: number;

  @IsString()
  readonly details?: string;

  @IsBoolean()
  @ApiProperty({ description: 'Default: boolean' })
  readonly active?: boolean; //default: true
}

export class UpdateSupplierProductDto extends PartialType(
  CreateSupplierProductDto,
) {}
