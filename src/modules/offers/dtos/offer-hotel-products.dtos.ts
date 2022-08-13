import { PartialType } from '@nestjs/mapped-types';
import {
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
} from 'class-validator';

export class CreateOfferHotelProductDto {
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  offerId: number;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  hotelProductId: number;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  quantity: number;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  price: number;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  discountPercent?: number;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  finalProductPrice: number;

  @IsString()
  description?: string;

  @IsDate()
  startDate?: Date;

  @IsDate()
  endDate?: Date;
}

export class UpdateOfferHotelProductDto extends PartialType(
  CreateOfferHotelProductDto,
) {}
