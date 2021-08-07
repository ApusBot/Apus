import { Module } from '@nestjs/common';
import { CommandsHandler } from './commands.handler';

@Module({
  providers: [CommandsHandler],
})
export class CommandsModule {}
