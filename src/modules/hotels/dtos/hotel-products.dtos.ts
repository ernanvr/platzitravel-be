import {
  IsString,
  IsNumber,
  IsNotEmpty,
  IsPositive,
  IsBoolean,
  IsArray,
} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

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
  readonly details?: number;

  @IsBoolean()
  readonly active?: boolean; //default: true

  @IsArray()
  @IsString({
    each: true,
  })
  readonly picturesUrl?: string[];
}

export class UpdateHotelProductDto extends PartialType(CreateHotelProductDto) {}
