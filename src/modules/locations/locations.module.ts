import { Module } from '@nestjs/common';
import { CitiesService } from './services/cities.service';
import { CitiesController } from './controllers/cities.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { City } from './entities/cities.entity';
import { CountriesController } from './controllers/countries.controller';
import { CountriesService } from './services/countries.service';
import { Country } from './entities/countries.entity';
import { StationsService } from './services/stations.service';
import { StationsController } from './controllers/stations.controller';
import { StationTypesService } from './services/station-types.service';
import { StationTypesController } from './controllers/station-types.controller';

@Module({
  imports: [TypeOrmModule.forFeature([City, Country])],
  providers: [
    CitiesService,
    CountriesService,
    StationsService,
    StationTypesService,
  ],
  controllers: [
    CitiesController,
    CountriesController,
    StationsController,
    StationTypesController,
  ],
})
export class LocationsModule {}
