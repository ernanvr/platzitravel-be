import { IsString, IsNotEmpty, MaxLength, IsBoolean } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateAgentDto {
  @IsString()
  @MaxLength(8, {
    message: 'agentCode is too long',
  })
  @IsNotEmpty()
  agentCode: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(64, {
    message: 'firstname is too long',
  })
  firstname: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(64, {
    message: 'lastname is too long',
  })
  lastname: string;

  @IsBoolean()
  active: boolean;
}

export class UpdateAgentDto extends PartialType(CreateAgentDto) {}
