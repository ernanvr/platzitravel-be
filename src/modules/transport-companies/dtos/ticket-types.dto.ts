import { IsString, IsNotEmpty, MaxLength } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateTicketTypeDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(64, {
    message: 'Description is too long',
  })
  ticketType: string;
}
export class UpdateTicketTypeDto extends PartialType(CreateTicketTypeDto) {}
