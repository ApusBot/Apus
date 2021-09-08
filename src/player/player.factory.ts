import { Injectable } from '@nestjs/common';
import { DefaultSoundPlayer } from './player';

@Injectable()
export class DefaultSoundPlayerFactory {
  public create(serverId: string) {
    return new DefaultSoundPlayer(serverId);
  }
}
