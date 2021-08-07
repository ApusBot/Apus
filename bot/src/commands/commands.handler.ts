import { Inject, Logger } from '@nestjs/common';
import { EventBus, EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { Message } from 'discord.js';
import { DiscordConfig, discordConfig } from 'src/config/discord.config';
import { MessageCreatedEvent } from 'src/discord-js/events/message-created.event';
import { DiscordCommandExecutedEvent } from './events/discord-command-executed';

@EventsHandler(MessageCreatedEvent)
export class CommandsHandler implements IEventHandler<MessageCreatedEvent> {
  private readonly logger = new Logger(CommandsHandler.name);

  constructor(
    private readonly eventBus: EventBus,
    @Inject(discordConfig.KEY) private readonly config: DiscordConfig,
  ) {}

  handle({ message }: MessageCreatedEvent) {
    this.logger.verbose(`Handling message ${message.id}`);
    if (!this.detectPrefix(message)) {
      const msg = `Message ${message.id} not detected as command. Skipping`;
      return this.logger.verbose(msg);
    }

    const { command, args } = this.parseMessage(message);
    if (!command) {
      const msg = `Message ${message.id} has valid prefix, but is missing body. Skipping`;
      return this.logger.verbose(msg);
    }

    this.eventBus.publish(
      new DiscordCommandExecutedEvent(command, message, args),
    );
  }

  private detectPrefix(msg: Message) {
    return msg.content.startsWith(this.config.prefix);
  }

  private parseMessage(msg: Message) {
    const messagePartsWithoutPrefix = msg.content
      .slice(this.config.prefix.length)
      .split(' ');
    const command = messagePartsWithoutPrefix[0];
    const args = messagePartsWithoutPrefix.slice(1)?.join(' ');

    return { command, args };
  }
}
