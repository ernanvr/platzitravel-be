import { PartialType } from '@nestjs/mapped-types';
import {
  IsString,
  IsNumber,
  IsNotEmpty,
  IsBoolean,
  IsArray,
  IsUrl,
  MaxLength,
} from 'class-validator';

export class CreateTransportCompany {
  @IsString()
  @IsNotEmpty()
  companyName: string;

  @IsNumber()
  @IsNotEmpty()
  cityId: number;

  @IsString()
  @IsNotEmpty()
  hqAddress: string;

  @IsNumber()
  @IsNotEmpty()
  companyTypeId: number;

  @IsString()
  description: string;

  @IsBoolean()
  @IsNotEmpty()
  isPartner: boolean;

  @IsBoolean()
  @IsNotEmpty()
  active: boolean;

  @IsArray()
  @IsUrl({
    each: true,
  })
  @MaxLength(255, {
    message: 'Url is too long',
    each: true,
  })
  picturesUrl: string[];
}

export class UpdateTransportCompany extends PartialType(
  CreateTransportCompany,
) {}
