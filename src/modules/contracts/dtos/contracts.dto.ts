import {
  IsString,
  IsNumber,
  IsDate,
  IsNotEmpty,
  IsBoolean,
} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateContractDto {
  @IsString()
  @IsNotEmpty()
  contractCode: string;

  @IsNumber()
  @IsNotEmpty()
  offerId: number;

  @IsNumber()
  @IsNotEmpty()
  agentId: number;

  @IsNumber()
  @IsNotEmpty()
  customerId: number;

  @IsDate()
  timeSigned?: Date;

  @IsNumber()
  @IsNotEmpty()
  totalPrice: number;

  @IsDate()
  paymentDate?: Date;

  @IsBoolean()
  paid?: boolean;

  @IsDate()
  paymentTime?: Date;

  @IsNumber()
  paymentAmount?: number;

  @IsBoolean()
  refunded?: boolean;

  @IsDate()
  refundedTime?: Date;

  @IsNumber()
  refundedAmount?: number;
}

export class UpdateContractDto extends PartialType(CreateContractDto) {}
