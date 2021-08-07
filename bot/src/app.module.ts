import { Module } from '@nestjs/common';
import { BotConfigModule } from './config/config.module';
import { DiscordJsModule } from './discord-js/discord-js.module';
import { HealthModule } from './health/health.module';
import { PlayersModule } from './players/players.module';

@Module({
  imports: [BotConfigModule, DiscordJsModule, HealthModule, PlayersModule],
})
export class AppModule {}
