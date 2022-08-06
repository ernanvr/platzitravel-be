import {
  IsString,
  IsNumber,
  IsDate,
  IsNotEmpty,
  IsBoolean,
  MaxLength,
} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateContractDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(8, {
    message: 'Contract code is too long',
  })
  readonly contractCode: string;

  @IsNumber()
  @IsNotEmpty()
  readonly offerId: number;

  @IsNumber()
  @IsNotEmpty()
  readonly agentId: number;

  @IsNumber()
  @IsNotEmpty()
  readonly customerId: number;

  @IsDate()
  readonly timeSigned?: Date;

  @IsNumber()
  @IsNotEmpty()
  readonly totalPrice: number;

  @IsDate()
  readonly paymentDate?: Date;

  @IsBoolean()
  readonly paid: boolean;

  @IsDate()
  readonly paymentTime?: Date;

  @IsNumber()
  readonly paymentAmount?: number;

  @IsBoolean()
  readonly refunded: boolean;

  @IsDate()
  readonly refundedTime?: Date;

  @IsNumber()
  readonly refundedAmount?: number;
}

export class UpdateContractDto extends PartialType(CreateContractDto) {}
