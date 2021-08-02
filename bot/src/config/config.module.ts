import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { discordConfig } from './discord.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [discordConfig],
    }),
  ],
})
export class BotConfigModule {}
