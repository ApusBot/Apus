import { Test, TestingModule } from '@nestjs/testing';
import { DiscordJsService } from './discord-js.service';

describe(DiscordJsService.name, () => {
  let service: DiscordJsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DiscordJsService],
    }).compile();

    service = module.get<DiscordJsService>(DiscordJsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
