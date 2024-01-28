import { Test, TestingModule } from '@nestjs/testing';
import { FilmyController } from './filmy.controller';

describe('FilmyController', () => {
  let controller: FilmyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FilmyController],
    }).compile();

    controller = module.get<FilmyController>(FilmyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
