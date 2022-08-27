import {
  IsString,
  IsNumber,
  IsDate,
  IsNotEmpty,
  IsBoolean,
  MaxLength,
  IsPositive,
} from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateContractDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(8, {
    message: 'Contract code is too long',
  })
  readonly contractCode: string;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  readonly offerId: number;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  readonly agentId: number;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  readonly customerId: number;

  @IsDate()
  readonly timeSigned?: Date;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  readonly totalPrice: number;

  @IsDate()
  readonly paymentDate?: Date;

  @IsBoolean()
  @ApiProperty({ description: 'Default: false' })
  readonly paid?: boolean; //default: false

  @IsDate()
  readonly paymentTime?: Date;

  @IsNumber()
  @IsPositive()
  readonly paymentAmount?: number;

  @IsBoolean()
  @ApiProperty({ description: 'Default: false' })
  readonly refunded?: boolean; //default: false

  @IsDate()
  readonly refundedTime?: Date;

  @IsNumber()
  @IsPositive()
  readonly refundedAmount?: number;
}

export class UpdateContractDto extends PartialType(CreateContractDto) {}
