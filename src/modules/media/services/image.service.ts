import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Storage } from '@google-cloud/storage';
import { ConfigType } from '@nestjs/config';
import config from 'src/config/config';
import { changeFileName } from '../utils/file-upload-utils';
import stream = require('stream');
import { ImageRequest } from '../interfaces/response.interfaces';
import { Image } from '../entities/image.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateImageDto } from '../dtos/image.dto';

@Injectable()
export class ImageService {
  private storage: Storage;
  private bucket: string;

  constructor(
    @Inject(config.KEY)
    private configuration: ConfigType<typeof config>,
    @InjectRepository(Image) private imageRepository: Repository<Image>,
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

  findAll() {
    return this.imageRepository.find();
  }

  async findOne(id: number) {
    const image = await this.imageRepository.findOne({
      where: { id },
    });

    if (!image) {
      throw new NotFoundException(`Image id ${id} wasn't found`);
    }

    return image;
  }

  uploadFiles(
    files: Express.Multer.File[],
    payload: CreateImageDto,
  ): Promise<Image | Image[]> {
    const images: ImageRequest[] = files.map((file) => {
      return {
        filename: changeFileName(file.originalname),
        buffer: file.buffer,
      };
    });

    const response = images.map((image) => {
      const blob = this.storage.bucket(this.bucket).file(image.filename);
      const passThroughStream = new stream.PassThrough();
      passThroughStream.write(image.buffer);
      passThroughStream.end();
      passThroughStream.pipe(blob.createWriteStream());

      return {
        ...payload,
        filename: image.filename,
        url: blob.publicUrl(),
        bucket: this.bucket,
      };
    });

    const newImages = this.imageRepository.create(response);

    return this.imageRepository.save(newImages);
  }

  async delete(id: number) {
    const image = await this.findOne(id);
    this.storage
      .bucket(image.bucket)
      .file(image.filename)
      .delete({ ignoreNotFound: true });
    return this.imageRepository.delete(id);
  }
}
