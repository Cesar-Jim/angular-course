import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// importación de observables
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify Service Listo');
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQBUEy9-sZNb3SYyJA4bPjKmHv0Tlht3z7oys7jROhV6qmnwgVwcWt6pyG8pJcPKtRJMaCzVaxJIfweq2mo'
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20').pipe(map(datos => datos['albums'].items));
  }

  getArtistas(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(map(datos => datos['artists'].items));
  }

  getArtista(id: string) {
    return this.getQuery(`artists/${id}`);
    // .pipe(map(datos => datos['artists'].items));
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`).pipe(map(datos => datos['tracks']));
  }

}
