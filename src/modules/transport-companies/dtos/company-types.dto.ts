import { IsString, IsNotEmpty, MaxLength } from 'class-validator';
import { PartialType } from '@nestjs/swagger';

export class CreateCompanyTypeDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(50, {
    message: 'Description is too long',
  })
  description: string;
}
export class UpdateCompanyTypeDto extends PartialType(CreateCompanyTypeDto) {}
