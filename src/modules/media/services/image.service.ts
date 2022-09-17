import { Inject, Injectable } from '@nestjs/common';
import { File, Storage } from '@google-cloud/storage';
import { ConfigType } from '@nestjs/config';
import config from 'src/config/config';
import { changeFileName } from '../utils/file-upload-utils';
import stream = require('stream');
import {
  FileJsonResponse,
  ImageRequest,
} from '../interfaces/response.interfaces';
import { Image } from '../entities/image.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ImageService {
  private storage: Storage;
  private bucket: string;

  constructor(
    @Inject(config.KEY)
    private configuration: ConfigType<typeof config>,
    @InjectRepository(Image) private imageService: Repository<Image>,
  ) {
    this.storage = new Storage({
      projectId: configuration.gcloud.projectId,
      credentials: {
        client_email: configuration.gcloud.clientEmail,
        private_key: configuration.gcloud.secretKey.replace(/\\n/gm, '\n'),
      },
    });

    this.bucket = configuration.gcloud.bucket;
  }

  uploadFile(file: Express.Multer.File): FileJsonResponse {
    const filename: string = changeFileName(file.originalname);

    const blob: File = this.storage.bucket(this.bucket).file(filename);
    const passThroughStream = new stream.PassThrough();
    passThroughStream.write(file.buffer);
    passThroughStream.end();
    passThroughStream.pipe(blob.createWriteStream());

    return {
      filename,
      url: blob.publicUrl(),
      bucket: this.bucket,
    };
  }

  uploadFiles(files: Express.Multer.File[]): FileJsonResponse[] {
    const images: ImageRequest[] = files.map((file) => {
      return {
        filename: changeFileName(file.originalname),
        buffer: file.buffer,
      };
    });

    const response: FileJsonResponse[] = images.map((image) => {
      const blob = this.storage.bucket(this.bucket).file(image.filename);
      const passThroughStream = new stream.PassThrough();
      passThroughStream.write(image.buffer);
      passThroughStream.end();
      passThroughStream.pipe(blob.createWriteStream());

      return {
        filename: image.filename,
        url: blob.publicUrl(),
        bucket: this.bucket,
      };
    });

    return response;
  }
}
