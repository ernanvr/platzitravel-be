import { IsEmail, IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateCustomerDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(64, {
    message: 'Firstname is too long',
  })
  readonly firstname: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(64, {
    message: 'Lastname is too long',
  })
  readonly lastname: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255, {
    message: 'Address is too long',
  })
  readonly address: string;

  @IsString()
  @MaxLength(32, {
    message: 'Phone is too long',
  })
  readonly phone?: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(32, {
    message: 'Mobile is too long',
  })
  readonly mobile: string;

  @IsEmail()
  @IsNotEmpty()
  @MaxLength(254, {
    message: 'Email is too long',
  })
  readonly email: string;

  @IsString()
  readonly details?: string;
}

export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {}
