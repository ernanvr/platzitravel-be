import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsBoolean,
  MaxLength,
} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateHotelDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(255, {
    message: 'Hotel name is too long',
  })
  readonly hotelName: string;

  @IsNumber()
  @IsNotEmpty()
  readonly cityId: number;

  @IsString()
  @IsNotEmpty()
  readonly hotelAddress: string;

  @IsString()
  readonly details?: string;

  @IsBoolean()
  @IsNotEmpty()
  readonly isPartner: boolean;

  @IsBoolean()
  readonly active?: boolean; //default: true

  @IsString()
  readonly picturesUrl: string[];
}

export class UpdateHotelDto extends PartialType(CreateHotelDto) {}
