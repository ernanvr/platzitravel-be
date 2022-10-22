import { PartialType } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MaxLength } from 'class-validator';

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
