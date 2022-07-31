import { PartialType } from '@nestjs/mapped-types';
import {
  IsString,
  IsNumber,
  IsNotEmpty,
  IsBoolean,
  IsArray,
  IsUrl,
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

  @IsUrl({
    each: true,
  })
  @IsArray()
  picturesUrl: string[];
}

export class UpdateTransportCompany extends PartialType(
  CreateTransportCompany,
) {}
