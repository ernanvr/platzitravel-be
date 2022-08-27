import { ApiProperty, PartialType } from '@nestjs/swagger';
import {
  IsString,
  IsNumber,
  IsNotEmpty,
  IsBoolean,
  IsArray,
  IsUrl,
  MaxLength,
} from 'class-validator';

export class CreateTransportCompanyDto {
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
  @ApiProperty({ description: 'Default: true' })
  active?: boolean;

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

export class UpdateTransportCompanyDto extends PartialType(
  CreateTransportCompanyDto,
) {}
