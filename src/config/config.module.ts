import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { discordConfig } from './discord.config';
import { baseConfig } from './base.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [baseConfig, discordConfig],
    }),
  ],
})
export class BotConfigModule {}
