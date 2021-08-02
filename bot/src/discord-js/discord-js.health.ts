import { Injectable } from '@nestjs/common';
import {
  HealthIndicator,
  HealthIndicatorResult,
  HealthCheckError,
} from '@nestjs/terminus';
import { User } from 'discord.js';
import { DiscordJsService } from 'src/discord-js/discord-js.service';

@Injectable()
export class DiscordJsHealthIndicator extends HealthIndicator {
  constructor(private readonly discordClient: DiscordJsService) {
    super();
  }

  async isHealthy(key: string): Promise<HealthIndicatorResult> {
    let user: User;
    try {
      user = await this.discordClient.user.fetch(true);
    } catch (e) {
      const status = this.getStatus(key, false);
      throw new HealthCheckError('DiscordJsService healthcheck failed', status);
    }

    return this.getStatus(key, true, { userTag: user.tag });
  }
}
