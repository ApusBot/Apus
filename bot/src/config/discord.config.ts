import { ConfigType, registerAs } from '@nestjs/config';

export const DISCORD_CONFIG_KEY = 'DISCORD_CONFIG_KEY';

export const discordConfig = registerAs(DISCORD_CONFIG_KEY, () => ({
  token: process.env.DISCORD_TOKEN,
  prefix: '?' || process.env.DISCORD_PREFIX,
}));

export type DiscordConfig = ConfigType<typeof discordConfig>;
