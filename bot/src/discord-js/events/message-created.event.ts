import { Message } from 'discord.js';

export class MessageCreatedEvent {
  constructor(public readonly message: Message) {}
}
