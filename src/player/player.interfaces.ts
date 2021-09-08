export interface SoundPlayer {
  readonly serverId: string;
}

export interface SoundPlayerFactory {
  create(serverId: string): SoundPlayer;
}
