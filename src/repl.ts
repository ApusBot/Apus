import { INestApplication } from '@nestjs/common';
import * as repl from 'repl';

export const startRepl = (app: INestApplication) => {
  const replServer = repl.start({ prompt: '' });
  replServer.context.app = app;

  return replServer;
};
