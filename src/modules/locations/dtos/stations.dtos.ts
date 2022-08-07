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
  @MaxLength(85, {
    message: 'Name of station is too long',
  })
  @IsNotEmpty()
  stationName: string;

  @IsString()
  @MaxLength(85, {
    message: 'Station code is too long',
  })
  @IsNotEmpty()
  stationCode: string;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  stationTypeId: number;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  cityId: number;
}

export class UpdateStationDto extends PartialType(CreateStationDto) {}
