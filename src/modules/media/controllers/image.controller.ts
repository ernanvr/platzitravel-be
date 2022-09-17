import {
  Controller,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { ApiConsumes } from '@nestjs/swagger';
import { ImageService } from '../services/image.service';
import { FastifyFilesInterceptor } from '../fatify-upload/files-interceptor';
import Multer = require('multer');
import { imageFileFilter } from '../utils/file-upload-utils';

@Controller('gcloud')
export class ImageController {
  constructor(private imageService: ImageService) {}

  @Post('uploadFiles')
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(
    FastifyFilesInterceptor('photo_url', 10, {
      storage: Multer.memoryStorage(),
      fileFilter: imageFileFilter,
    }),
  )
  uploadFiles(@UploadedFiles() files: Express.Multer.File[]) {
    return this.imageService.uploadFiles(files);
  }
}
