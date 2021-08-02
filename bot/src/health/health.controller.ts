import { Controller, Get } from '@nestjs/common';
import { HealthCheck, HealthCheckService } from '@nestjs/terminus';
import { DiscordJsHealthIndicator } from 'src/discord-js/discord-js.health';

@Controller('/.well-known/health')
export class HealthController {
  constructor(
    private readonly health: HealthCheckService,
    private readonly discordJsHealth: DiscordJsHealthIndicator,
  ) {}

  @Get()
  @HealthCheck()
  check() {
    return this.health.check([
      () => this.discordJsHealth.isHealthy('discord.js'),
    ]);
  }
}
