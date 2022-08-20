import { PartialType } from '@nestjs/mapped-types';
import { IsString, IsNotEmpty, MaxLength } from 'class-validator';

export class CreateStationTypeDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(50, {
    message: 'Name of station type is too long',
  })
  readonly stationTypeName: string;
}
export class UpdateStationTypeDto extends PartialType(CreateStationTypeDto) {}
