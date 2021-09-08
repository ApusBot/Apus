import { Test, TestingModule } from '@nestjs/testing';
import { PlayerService } from './player.service';

describe('PlayerService', () => {
  let service: PlayerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlayerService],
    }).compile();

    service = module.get<PlayerService>(PlayerService);
  });

  it('should return the same instance of Player when called multiple times with the same id', () => {
    const id = '1';
    expect(service.getPlayer(id)).toBe(service.getPlayer(id));
  });

  it('should return different players for different ids', () => {
    expect(service.getPlayer('1')).not.toBe(service.getPlayer('2'));
  });
});
