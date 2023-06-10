import { PartialType } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsDefined,
  IsEmail,
  IsNotEmpty,
  IsNotEmptyObject,
  IsObject,
  IsString,
  MaxLength,
  ValidateIf,
  ValidateNested,
} from 'class-validator';
import { CreateAgentDto } from './agents.dto';
import { CreateCustomerDto } from './customers.dto';

export class CreateRelatedUserDto {
  @IsNotEmpty()
  @IsEmail()
  @MaxLength(255, {
    message: 'Username is too long. Allowed only 64 chars',
  })
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  readonly password: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(64, {
    message: 'Role is too long. Allowed only 64 chars',
  })
  readonly role: string;

  @ValidateIf((o) => o.role === 'agent')
  @IsNotEmpty()
  @IsDefined()
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested()
  @Type(() => CreateAgentDto)
  agent: CreateAgentDto;

  @ValidateIf((o) => o.role === 'customer')
  @IsNotEmpty()
  @IsDefined()
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested()
  @Type(() => CreateCustomerDto)
  customer: CreateCustomerDto;
}

export class CreateUserDto {
  @IsNotEmpty()
  @IsEmail()
  @MaxLength(255, {
    message: 'Username is too long. Allowed only 64 chars',
  })
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  readonly password: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(64, {
    message: 'Role is too long. Allowed only 64 chars',
  })
  readonly role: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
