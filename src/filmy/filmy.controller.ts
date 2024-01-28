import { Controller, Get } from '@nestjs/common';
import { FilmyApiService } from '../filmy-api/filmy-api.service'

@Controller('filmy')
export class FilmyController {
    constructor(private readonly Service: FilmyApiService) {}

    @Get()
    wszystkie(): string {
        return "Główna strona filmy";
    }

    @Get("API")
    async API(): Promise<any> {
        return this.Service.pobierzListeFilmow();
    }

}
