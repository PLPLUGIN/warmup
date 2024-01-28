import * as request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { FilmyApiService } from '../src/filmy-api/filmy-api.service';
import { AppModule } from '../src/app.module'
import { INestApplication } from '@nestjs/common';
import { setupServer } from 'msw/node'
import { handlers } from './MSW/mswHandlers'



describe("Filmy (e2e)", () => {

  let app;
  const server = setupServer(...handlers);


  beforeAll(async () => {
    
    server.listen({ onUnhandledRequest: "bypass" });

    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
      providers: [FilmyApiService],
    }).compile();

    app = module.createNestApplication();
    await app.init();

  });


  afterAll(async () => {

    server.close();
    await app.close();

  });


  it('GET /pobierzListeFilmow', () => {
    return request(app.getHttpServer())
      .get('/filmy/API')
      .expect(200)
      .expect((response) => {
        const responseData = response.body;
        expect(responseData).toBeDefined(); //jaki kolwiek response
        });
  });

});

