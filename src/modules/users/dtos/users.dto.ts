import { PartialType } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, Max } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @Max(64, {
    message: 'Username is too long. Allowed only 64 chars',
  })
  readonly username: string;

  @IsNotEmpty()
  @IsString()
  readonly password: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  @Max(64, {
    message: 'Role is too long, Max allowed is 64 chars',
  })
  readonly role: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
