import { Module } from '@nestjs/common';
import { CitiesService } from './services/cities.service';
import { CitiesController } from './controllers/cities.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { City } from './entities/cities.entity';
import { CountriesController } from './controllers/countries.controller';
import { CountriesService } from './services/countries.service';
import { Country } from './entities/countries.entity';

@Module({
  imports: [TypeOrmModule.forFeature([City, Country])],
  providers: [CitiesService, CountriesService],
  controllers: [CitiesController, CountriesController],
})
export class LocationsModule {}
