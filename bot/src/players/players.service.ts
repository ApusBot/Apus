import { Injectable } from "@nestjs/common";
import { SoundPlayer } from "./sound.player";


@Injectable()
export class PlayersService {
    private readonly players: SoundPlayer[] = [];

    get(serverId: string): SoundPlayer {
        let player: SoundPlayer | undefined = this.players.find((player) => {
            return player.serverId === serverId;
        });

        if (!player) {
            player = new SoundPlayer(serverId);
            this.players.push(player);
        }
        return player;
    }
}
