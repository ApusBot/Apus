import { Inject, Injectable } from '@nestjs/common';
import { SOUND_PLAYER_FACTORY } from './player.consts';
import { SoundPlayer, SoundPlayerFactory } from './player.interfaces';

@Injectable()
export class PlayerService {
  private readonly players: SoundPlayer[] = [];

  constructor(
    @Inject(SOUND_PLAYER_FACTORY)
    private readonly soundPlayerFactory: SoundPlayerFactory,
  ) {}

  getPlayer(serverId: string): SoundPlayer {
    let player = this.players.find((player) => {
      return player.serverId === serverId;
    });

    if (!player) {
      player = this.soundPlayerFactory.create(serverId);
      this.players.push(player);
    }
    return player;
  }
}
