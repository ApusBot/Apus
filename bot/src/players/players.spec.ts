import { PlayersService } from './players.service';
import { SoundPlayer } from './sound.player';


describe("get method test", () => {
    let playersService: PlayersService;
    let new_i: SoundPlayer | undefined;
    let serv_i: SoundPlayer | undefined;
    
    playersService = new PlayersService();
    new_i = new SoundPlayer('test');
    serv_i = playersService.get('test');

    test("Should initiate new instance: ", () => {
        expect(new_i).toStrictEqual(serv_i);
    })

    test('Should return the same instance: ', () => {
        expect(serv_i).toBe(playersService.get('test'));
    })
})
