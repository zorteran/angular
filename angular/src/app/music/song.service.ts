import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from '../app-config';
import { Observable } from 'rxjs';
import { Song } from './models/song.model';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor(private http: HttpClient, @Inject(BASE_URL) public baseUrl: string) {

  }
  getSongs(): Observable<Song[]> {
    return this.http.get<Song[]>(this.baseUrl + '/songs');
  }
}
