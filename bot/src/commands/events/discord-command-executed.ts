import { Message } from 'discord.js';

export class DiscordCommandExecutedEvent {
  constructor(
    public readonly command: string,
    public readonly context: Message,
    public readonly args?: string,
  ) {}
}
