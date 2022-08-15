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
  @IsString()
  @IsNotEmpty()
  @MaxLength(8, {
    message: 'Offer code is too long',
  })
  offerCode: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255, {
    message: 'Offer code is too long',
  })
  offerName: string;

  @IsDate()
  @IsNotEmpty()
  activeFrom: Date;

  @IsDate()
  @IsNotEmpty()
  activeTo: Date;

  @IsDate()
  timeAccepted: boolean;

  @IsBoolean()
  accepted: boolean;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  promoOfferId: number;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  agentId: number;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  customerId: number;
}

export class UpdateOfferDto extends PartialType(CreateOfferDto) {}
