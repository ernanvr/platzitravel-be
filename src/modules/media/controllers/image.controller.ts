import {
  Body,
  Get,
  Controller,
  Post,
  UploadedFiles,
  UseInterceptors,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ParseIntPipe } from '@nestjs/common';

import { ApiConsumes, ApiTags } from '@nestjs/swagger';
import { ImageService } from '../services/image.service';
import { FastifyFilesInterceptor } from '../fatify-upload/files-interceptor';
import Multer = require('multer');
import { imageFileFilter } from '../utils/file-upload-utils';
import { CreateImageDto } from '../dtos/image.dto';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@ApiTags('Images')
@Controller({
  path: 'images',
  version: '1',
})
export class ImageController {
  constructor(private imageService: ImageService) {}

  @Get()
  getAll() {
    return this.imageService.findAll();
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.imageService.findOne(id);
  }

  @Post('upload')
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(
    FastifyFilesInterceptor('photo_url', 10, {
      storage: Multer.memoryStorage(),
      fileFilter: imageFileFilter,
    }),
  )
  uploadFiles(
    @UploadedFiles() files: Express.Multer.File[],
    @Body() payload: CreateImageDto,
  ) {
    return this.imageService.uploadFiles(files, payload);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.imageService.delete(id);
  }
}
