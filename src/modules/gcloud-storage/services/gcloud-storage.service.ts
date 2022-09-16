import { Inject, Injectable } from '@nestjs/common';
import { File, Storage } from '@google-cloud/storage';
import { ConfigType } from '@nestjs/config';
import config from 'src/config/config';
import { changeFileName } from '../utils/file-upload-utils';
import stream = require('stream');
import { responseFileInterface } from '../interfaces/response.interfaces';

@Injectable()
export class GcloudStorageService {
  private storage: Storage;
  private bucket: string;

  constructor(
    @Inject(config.KEY)
    private configuration: ConfigType<typeof config>,
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

  uploadFile(file: Express.Multer.File): responseFileInterface {
    const filename: string = changeFileName(file.originalname);

    const blob: File = this.storage.bucket(this.bucket).file(filename);
    const passThroughStream = new stream.PassThrough();
    passThroughStream.write(file.buffer);
    passThroughStream.end();
    passThroughStream.pipe(blob.createWriteStream());

    return {
      filename,
      url: `https://storage.googleapis.com/${this.configuration.gcloud.bucket}/${filename}`,
      bucket: this.bucket,
    };
  }

  async delete(url: string[]) {
    return { url };
  }
}
