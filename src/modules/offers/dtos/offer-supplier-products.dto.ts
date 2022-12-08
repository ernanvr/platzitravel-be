import { PartialType } from '@nestjs/swagger';
import {
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
} from 'class-validator';

export class CreateOfferSupplierProductDto {
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  readonly offerId: number;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  readonly supplierProductId: number;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  readonly quantity: number;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  readonly cost: number;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  readonly price: number;

  @IsNumber()
  @IsPositive()
  readonly promoPrice: number;

  @IsString()
  readonly description?: string;

  @IsDate()
  readonly startDate?: Date;

  @IsDate()
  readonly endDate?: Date;
}

export class UpdateOfferSupplierProductDto extends PartialType(
  CreateOfferSupplierProductDto,
) {}
