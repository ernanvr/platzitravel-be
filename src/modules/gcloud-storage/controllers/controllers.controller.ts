import {
  Body,
  Controller,
  Post,
  Req,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { ApiConsumes } from '@nestjs/swagger';
import { FastifyFileInterceptor } from '../fatify-upload/file-interceptor';
import { GcloudStorageService } from '../services/gcloud-storage.service';
import { Request } from 'express';
import { filesMapper } from '../utils/file-mapper';
import { FastifyFilesInterceptor } from '../fatify-upload/files-interceptor';
import { MultipleFileDto } from '../dtos/multiple-files-dto';
import Multer = require('multer');

@Controller('gcloud')
export class GCloudController {
  constructor(private gcstorageService: GcloudStorageService) {}

  @Post('uploadFile')
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(
    FastifyFileInterceptor('photo_url', {
      limits: {
        files: 1,
        fileSize: 1024 * 1024,
      },
      storage: Multer.memoryStorage(),
    }),
  )
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    return this.gcstorageService.uploadFile(file);
  }

  @ApiConsumes('multipart/form-data')
  @Post('uploadFiles')
  @UseInterceptors(
    FastifyFilesInterceptor('photo_url', 10, {
      storage: Multer.memoryStorage(),
    }),
  )
  multiple(
    @Req() req: Request,
    @UploadedFiles() files: Express.Multer.File[],
    @Body() body: MultipleFileDto,
  ) {
    return { ...body, photo_url: filesMapper({ files, req }) };
  }
}
