import {
  Inject,
  Injectable,
  Logger,
  OnApplicationBootstrap,
  OnApplicationShutdown,
} from '@nestjs/common';
import { EventBus } from '@nestjs/cqrs';
import { Client as DiscordClient } from 'discord.js';
import { DiscordConfig, discordConfig } from 'src/config/discord.config';
import { MessageCreatedEvent } from './events/message-created.event';

@Injectable()
export class DiscordJsService
  extends DiscordClient
  implements OnApplicationBootstrap, OnApplicationShutdown
{
  private readonly logger = new Logger(DiscordJsService.name);

  constructor(
    @Inject(discordConfig.KEY) private readonly config: DiscordConfig,
    private readonly eventBus: EventBus,
  ) {
    super();
    this.setupEvents();
  }

  public async onApplicationBootstrap() {
    this.logger.log('Client logging in');
    await this.login(this.config.token);
    this.logger.log('Client logged');
  }

  public async onApplicationShutdown() {
    this.destroy();
  }

  private setupEvents() {
    this.on('ready', () => {
      this.logger.log(`Bot ready as ${this.user.tag}`);
    });

    this.on('warn', (args) => {
      this.logger.warn(args);
    });

    this.on('error', (err) => {
      this.logger.error(err);
    });

    this.on('debug', (debugInfo) => {
      this.logger.verbose(debugInfo);
    });

    this.on('message', (msg) => {
      this.eventBus.publish(new MessageCreatedEvent(msg));
    });
  }
}
