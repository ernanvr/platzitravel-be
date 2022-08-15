import { IsString, IsNotEmpty, IsNumber, IsPositive } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateCityDto {
  @IsString()
  @IsNotEmpty()
  readonly cityName: string;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  readonly countryId: number;
}

export class UpdateCityDto extends PartialType(CreateCityDto) {}
