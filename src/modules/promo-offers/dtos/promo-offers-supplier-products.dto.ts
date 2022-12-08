import { PartialType } from '@nestjs/swagger';
import {
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
} from 'class-validator';

export class CreatePromoOfferSupplierProductDto {
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  offerId: number;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  supplierProductId: number;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  quantity: number;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  cost: number;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  price: number;

  @IsNumber()
  @IsPositive()
  promoPrice: number;

  @IsString()
  description?: string;

  @IsDate()
  startDate?: Date;

  @IsDate()
  endDate?: Date;
}

export class UpdatePromoOfferSupplierProductDto extends PartialType(
  CreatePromoOfferSupplierProductDto,
) {}
