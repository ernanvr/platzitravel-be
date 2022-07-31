import { IsString, IsNotEmpty, IsNumber, IsBoolean } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateHotelDto {
  @IsString()
  @IsNotEmpty()
  readonly hotelName: string;

  @IsNumber()
  @IsNotEmpty()
  readonly cityId: number;

  @IsString()
  @IsNotEmpty()
  readonly hotelAddress: string;

  @IsString()
  readonly details: string;

  @IsBoolean()
  @IsNotEmpty()
  isPartner: boolean;

  @IsBoolean()
  @IsNotEmpty()
  active: boolean;

  @IsString()
  readonly picturesUrl: string[];
}

export class UpdateHotelDto extends PartialType(CreateHotelDto) {}
