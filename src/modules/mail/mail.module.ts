import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { MailService } from './services/mail.service';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { ConfigType } from '@nestjs/config';
import config from '../../config/config';

@Module({
  imports: [
    MailerModule.forRootAsync({
      inject: [config.KEY],
      useFactory: async (configuration: ConfigType<typeof config>) => {
        return {
          transport: {
            host: 'smtp.gmail.com',
            secure: false,
            auth: {
              user: configuration.nodemailer.email,
              pass: configuration.nodemailer.emailPassword,
            },
          },
          defaults: {
            from: '"No reply" <noreply@travelagency.com>',
          },
          template: {
            dir: './templates',
            adapter: new HandlebarsAdapter(),
          },
          options: {
            strict: true,
          },
        };
      },
    }),
  ],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
