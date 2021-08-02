import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { DiscordJsModule } from 'src/discord-js/discord-js.module';
import { DiscordJsHealthIndicator } from '../discord-js/discord-js.health';
import { HealthController } from './health.controller';

@Module({
  controllers: [HealthController],
  imports: [TerminusModule, DiscordJsModule],
  providers: [DiscordJsHealthIndicator],
})
export class HealthModule {}
