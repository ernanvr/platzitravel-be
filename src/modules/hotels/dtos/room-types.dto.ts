import { IsString, IsNotEmpty, MaxLength } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateRoomType {
  @IsString()
  @IsNotEmpty()
  @MaxLength(50, {
    message: 'Description is too long',
  })
  readonly description: string;
}

export class UpdateRoomType extends PartialType(CreateRoomType) {}
