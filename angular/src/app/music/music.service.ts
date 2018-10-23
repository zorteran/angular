import { Injectable, InjectionToken, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Artist } from './models/artist.model';
import { share, shareReplay, delay } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { BASE_URL } from '../app-config';

@Injectable({
  providedIn: 'root'
})
export class MusicService {


  constructor(private http: HttpClient, @Inject(BASE_URL) public baseUrl: string) {

  }

  getArtists(): Observable<Artist[]> {
    return this.http.get<Artist[]>(this.baseUrl + '/artists').pipe(shareReplay());
  }
  getArtist(id: string): Observable<Artist> {
    return this.http.get<Artist>(this.baseUrl + '/artists/' + id + '?_embed=songs');
  }
  searchArtist(query: string): Observable<Artist[]> {
    return this.http.get<Artist[]>(this.baseUrl + '/artists/?q=' + query);
  }
}
