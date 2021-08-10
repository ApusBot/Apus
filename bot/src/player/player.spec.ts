import { PlayerService } from './player.service';
import { SoundPlayer } from './sound.player'
jest.mock('./sound.player', () => {
    return {
        SoundPlayer: jest.fn().mockImplementation(() => { return {} })
    }
});

describe("PlayerService", () => {
    let playerService: PlayerService;
    let serv_i: SoundPlayer | undefined;
    
    playerService = new PlayerService();
    serv_i = playerService.get('test');

    it("should initialize a new instance of player when the server is not cached", () => {
        expect(SoundPlayer).toHaveBeenCalledTimes(1);
    })

    it('should return existing instance when player for given serverId was already created', () => {
        expect(playerService.get('test')).toStrictEqual(playerService.get('test'));
    })
})
