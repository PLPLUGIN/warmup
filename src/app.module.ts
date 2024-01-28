import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FilmyController } from './filmy/filmy.controller';
import { FilmyApiService } from './filmy-api/filmy-api.service';
@Module({
  imports: [],
  controllers: [AppController, FilmyController],
  providers: [AppService, FilmyApiService],
})
export class AppModule {}
