import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class FilmyApiService {
    async pobierzListeFilmow(): Promise<any> {
        try {
            const response = await axios.get('http://www.omdbapi.com/?i=tt15398776&apikey=30d3bf39');
            return response.data;
        } catch (error) {
            throw new Error("Coś poszło nie tak w API call ;((");
        }
        
    }
}
