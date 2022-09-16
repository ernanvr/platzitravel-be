import {
  IsString,
  IsNumber,
  IsNotEmpty,
  IsPositive,
  IsBoolean,
} from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateHotelProductDto {
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  readonly hotelId: number;

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
  readonly servicePrice: number;

  @IsString()
  readonly details?: string;

  @IsBoolean()
  @ApiProperty({ description: 'Default: boolean' })
  readonly active?: boolean; //default: true
}

export class UpdateHotelProductDto extends PartialType(CreateHotelProductDto) {}
