import { bootstrap } from './server';

const main = async () => {
  const app = await bootstrap();

  if (process.env.START_REPL === '1') {
    const { startRepl } = await import('./repl');
    startRepl(app);
  }
};

main();
