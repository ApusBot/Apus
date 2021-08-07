import { Module } from '@nestjs/common';
import { BotConfigModule } from './config/config.module';
import { DiscordJsModule } from './discord-js/discord-js.module';
import { HealthModule } from './health/health.module';
import { CommandsModule } from './commands/commands.module';

@Module({
  imports: [BotConfigModule, DiscordJsModule, HealthModule, CommandsModule],
})
export class AppModule {}
