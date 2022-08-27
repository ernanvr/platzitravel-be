import { PartialType } from '@nestjs/swagger';
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
  readonly offerId: number;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  readonly hotelProductId: number;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  readonly quantity: number;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  readonly price: number;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  readonly discountPercent?: number;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  readonly finalProductPrice: number;

  @IsString()
  readonly description?: string;

  @IsDate()
  readonly startDate?: Date;

  @IsDate()
  readonly endDate?: Date;
}

export class UpdateOfferHotelProductDto extends PartialType(
  CreateOfferHotelProductDto,
) {}
