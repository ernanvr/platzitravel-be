import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CountriesController } from '../countries/countries.controller';
import { CountriesService } from './countries.service';
import { Country } from './entities/countries.entity';
import { City } from '../cities/entities/cities.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Country, City])],
  controllers: [CountriesController],
  providers: [CountriesService],
})
export class CountriesModule {}
