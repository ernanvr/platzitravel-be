import { Module } from '@nestjs/common';
import { GcloudStorageService } from './services/gcloud-storage.service';
import { GCloudController } from './controllers/controllers.controller';

@Module({
  providers: [GcloudStorageService],
  exports: [GcloudStorageModule],
  controllers: [GCloudController],
})
export class GcloudStorageModule {}
