import {
  IsString,
  IsNumber,
  IsPositive,
  IsNotEmpty,
  MaxLength,
  IsDate,
  IsBoolean,
} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateOfferDto {
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  readonly promoOfferId: number;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  readonly agentId: number;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  readonly customerId: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(8, {
    message: 'Offer code is too long',
  })
  readonly offerCode: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255, {
    message: 'Offer code is too long',
  })
  readonly offerName: string;

  @IsDate()
  @IsNotEmpty()
  readonly activeFrom: Date;

  @IsDate()
  @IsNotEmpty()
  readonly activeTo: Date;

  @IsDate()
  readonly timeAccepted?: boolean;

  @IsBoolean()
  readonly accepted?: boolean;
}

export class UpdateOfferDto extends PartialType(CreateOfferDto) {}
