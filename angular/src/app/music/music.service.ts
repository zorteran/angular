import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Artist } from './models/artist.model';

@Injectable({
  providedIn: 'root'
})
export class MusicService {


  constructor(private http: HttpClient) {

  }

  getArtists(): Observable<Artist[]> {
    return this.http.get<Artist[]>('http://localhost:3000/artists');
  }
}
