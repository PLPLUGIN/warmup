import { Test, TestingModule } from '@nestjs/testing';
import { FilmyApiService } from './filmy-api.service';

describe('FilmyApiService', () => {
  let service: FilmyApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FilmyApiService],
    }).compile();

    service = module.get<FilmyApiService>(FilmyApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
