import { Module } from '@nestjs/common';
import { BotConfigModule } from './config/config.module';
import { DiscordJsModule } from './discord-js/discord-js.module';
import { HealthModule } from './health/health.module';
import { PlayerModule } from './player/player.module';

@Module({
  imports: [BotConfigModule, DiscordJsModule, HealthModule, PlayerModule],
})
export class AppModule {}
