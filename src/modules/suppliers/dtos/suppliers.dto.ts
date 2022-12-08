import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsBoolean,
  MaxLength,
  IsPositive,
} from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateSupplierDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(255, {
    message: 'Supplier name is too long',
  })
  readonly name: string;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  readonly cityId: number;

  @IsString()
  @IsNotEmpty()
  readonly address: string;

  @IsString()
  readonly details?: string;

  @IsBoolean()
  @IsNotEmpty()
  readonly isPartner: boolean;

  @IsBoolean()
  @ApiProperty({ description: 'Default: true' })
  readonly active?: boolean; //default: true

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  readonly companyTypeId: number;
}

export class UpdateSupplierDto extends PartialType(CreateSupplierDto) {}
