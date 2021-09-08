import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BaseConfig, BASE_CONFIG_KEY } from './config/base.config';

export const bootstrap = async () => {
  const logger = new Logger('Bootstrap');
  const app = await NestFactory.create(AppModule);

  const configService = app.get<ConfigService>(ConfigService);
  const { port } = configService.get<BaseConfig>(BASE_CONFIG_KEY);
  await app.listen(port);
  logger.log(`Application listening on port ${port}`);

  return app;
};

bootstrap();
