import { Module } from '@nestjs/common';
import { HotelsService } from './services/hotels.service';
import { HotelsController } from './controllers/hotels.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hotel } from './entities/hotels.entity';
import { HotelProductsService } from './services/hotel-products.service';
import { HotelProductsController } from './controllers/hotel-products.controller';
import { RoomTypesController } from './controllers/room-types.controller';
import { RoomTypesService } from './services/room-types.service';
import { HotelProduct } from './entities/hotel-products.entity';
import { RoomType } from './entities/room-types.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Hotel, HotelProduct, RoomType])],
  providers: [HotelsService, HotelProductsService, RoomTypesService],
  controllers: [HotelsController, HotelProductsController, RoomTypesController],
})
export class HotelsModule {}
