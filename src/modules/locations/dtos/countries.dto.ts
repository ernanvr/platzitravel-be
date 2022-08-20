import { IsString, IsNotEmpty, MaxLength } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateCountryDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(8, {
    message: 'Country code is too long',
  })
  readonly countryCode: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(64, {
    message: 'Country name is too long',
  })
  readonly countryName: string;
}

export class UpdateCountryDto extends PartialType(CreateCountryDto) {}
