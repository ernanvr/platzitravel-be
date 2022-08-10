import { IsString, IsNumber, IsPositive, IsNotEmpty } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateOfferTransportProduct {
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  offerId: number;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  transportProductId: number;

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
  discountPercent?: number;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  finalProductPrice?: number;

  @IsString()
  description?: string;
}

export class UpdateOfferTransportProduct extends PartialType(
  CreateOfferTransportProduct,
) {}
