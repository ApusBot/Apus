import { Module } from '@nestjs/common';
import { SOUND_PLAYER_FACTORY } from './player.consts';
import { PlayerService } from './player.service';
import { DefaultSoundPlayerFactory } from './player.factory';

@Module({
  providers: [
    PlayerService,
    DefaultSoundPlayerFactory,
    {
      provide: SOUND_PLAYER_FACTORY,
      useExisting: DefaultSoundPlayerFactory,
    },
  ],
  exports: [PlayerService],
})
export class PlayerModule {}
