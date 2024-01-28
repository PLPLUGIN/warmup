import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('/filmy/API', ({ request }) => {
    return new HttpResponse("Jakas odpowiedz", {
      status: 200,
      statusText: 'Wszystko git',
    })
  }),
  http.get('http://www.omdbapi.com/', ({ request }) => {
    return new HttpResponse("Jakas odpowiedz", {
      status: 200,
      statusText: 'Wszystko git',
    })
  }),
];