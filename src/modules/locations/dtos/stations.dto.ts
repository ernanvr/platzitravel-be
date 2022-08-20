import { PartialType } from '@nestjs/mapped-types';
import {
  IsString,
  IsNumber,
  IsPositive,
  IsNotEmpty,
  MaxLength,
} from 'class-validator';

export class CreateStationDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(85, {
    message: 'Name of station is too long',
  })
  stationName: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(85, {
    message: 'Station code is too long',
  })
  stationCode: string;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  stationTypeId: number;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  cityId: number;
}

export class UpdateStationDto extends PartialType(CreateStationDto) {}
