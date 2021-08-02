import { Module } from '@nestjs/common';
import { DiscordJsHealthIndicator } from './discord-js.health';
import { DiscordJsService } from './discord-js.service';

@Module({
  providers: [DiscordJsService, DiscordJsHealthIndicator],
  exports: [DiscordJsService],
})
export class DiscordJsModule {}
