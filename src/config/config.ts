import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    database: {
      name: process.env.DATABASE_NAME,
      port: parseInt(process.env.DATABASE_PORT),
      password: process.env.DATABASE_PASSWORD,
      host: process.env.DATABASE_HOST,
      username: process.env.DATABASE_USERNAME,
    },
    gcloud: {
      projectId: process.env.GCLOUD_PROJECT_ID,
      clientEmail: process.env.GCLOUD_CLIENT_EMAIL,
      secretKey: process.env.GCLOUD_SECRET_KEY,
      bucket: process.env.GCLOUD_BUCKET,
    },
    port: process.env.PORT,
  };
});
