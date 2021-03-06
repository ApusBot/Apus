import { ConfigType, registerAs } from '@nestjs/config';

export const BASE_CONFIG_KEY = 'BASE_CONFIG_KEY';

export const baseConfig = registerAs(BASE_CONFIG_KEY, () => ({
  port: +process.env.PORT || 3000,
}));

export type BaseConfig = ConfigType<typeof baseConfig>;
