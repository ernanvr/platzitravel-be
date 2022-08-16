import { IsString, IsNotEmpty, MaxLength, IsBoolean } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateAgentDto {
  @IsString()
  @MaxLength(8, {
    message: 'agentCode is too long',
  })
  @IsNotEmpty()
  readonly agentCode: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(64, {
    message: 'firstname is too long',
  })
  readonly firstname: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(64, {
    message: 'lastname is too long',
  })
  readonly lastname: string;

  @IsBoolean()
  readonly active: boolean;
}

export class UpdateAgentDto extends PartialType(CreateAgentDto) {}
