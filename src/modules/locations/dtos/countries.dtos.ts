import { IsString, IsNotEmpty } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateCountryDto {
  @IsString()
  @IsNotEmpty()
  readonly countryCode: string;

  @IsString()
  @IsNotEmpty()
  readonly countryName: string;
}

export class UpdateCountryDto extends PartialType(CreateCountryDto) {}
