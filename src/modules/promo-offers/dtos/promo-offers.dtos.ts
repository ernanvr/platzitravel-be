import { PartialType } from '@nestjs/mapped-types';
import { IsDate, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreatePromoOfferDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(8, {
    message: 'Promotional offer code is too long',
  })
  promoOfferCode: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255, {
    message: 'Promotional offer name is too long',
  })
  promoOfferName: string;

  @IsDate()
  @IsNotEmpty()
  activeFrom: Date;

  @IsDate()
  @IsNotEmpty()
  activeTo: Date;
}

export class UpdatePromoOfferCode extends PartialType(CreatePromoOfferDto) {}
