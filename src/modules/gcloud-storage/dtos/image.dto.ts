import {
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  IsUrl,
} from 'class-validator';

export class CreateImageDto {
  @IsNumber()
  @IsPositive()
  readonly hotelId: number;

  @IsNumber()
  @IsPositive()
  readonly hotelProductId: number;

  @IsNumber()
  @IsPositive()
  readonly transportCompanyId: number;

  @IsNumber()
  @IsPositive()
  readonly transportCompanyProductId: number;

  @IsNotEmpty()
  @IsString()
  readonly filename: string;

  @IsNotEmpty()
  @IsString()
  @IsUrl()
  readonly url: string;

  @IsNotEmpty()
  @IsString()
  readonly bucket: string;
}
