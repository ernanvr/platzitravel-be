import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsBoolean,
  IsArray,
  MaxLength,
  IsUrl,
} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateTransportCompanyProductDto {
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  transportCompanyId: number;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  ticketTypeId: number;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  originId: number;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  destinationId: number;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  quantity: number;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  price: number;

  @IsBoolean()
  active?: boolean;

  @IsArray()
  @IsUrl({
    each: true,
  })
  @MaxLength(255, {
    message: 'Url is too long',
    each: true,
  })
  picturesUrl?: Array<string>;
}
export class UpdateTransportCompanyProductDto extends PartialType(
  CreateTransportCompanyProductDto,
) {}
