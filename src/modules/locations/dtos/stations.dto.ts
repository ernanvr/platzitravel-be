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
  readonly stationName: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(85, {
    message: 'Station code is too long',
  })
  readonly stationCode: string;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  readonly stationTypeId: number;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  readonly cityId: number;
}

export class UpdateStationDto extends PartialType(CreateStationDto) {}
