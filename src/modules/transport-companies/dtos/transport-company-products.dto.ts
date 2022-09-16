import { IsNotEmpty, IsNumber, IsPositive, IsBoolean } from 'class-validator';
import { PartialType } from '@nestjs/swagger';

export class CreateTransportCompanyProductDto {
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  transportCompanyId: number;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  ticketTypeId: number;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  originId: number;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  destinationId: number;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  quantity: number;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  price: number;

  @IsBoolean()
  active?: boolean;
}
export class UpdateTransportCompanyProductDto extends PartialType(
  CreateTransportCompanyProductDto,
) {}
