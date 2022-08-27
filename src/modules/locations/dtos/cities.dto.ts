import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  MaxLength,
} from 'class-validator';
import { PartialType } from '@nestjs/swagger';

export class CreateCityDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(255, {
    message: 'City name is too long',
  })
  readonly cityName: string;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  readonly countryId: number;
}

export class UpdateCityDto extends PartialType(CreateCityDto) {}
