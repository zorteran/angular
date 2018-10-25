import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from '../app-config';
import { Observable, Subject } from 'rxjs';
import { Song } from './models/song.model';
import { tap, switchMap, startWith, merge } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  private reload$ = new Subject();

  constructor(private http: HttpClient, @Inject(BASE_URL) public baseUrl: string) {

  }
  getSongs(): Observable<Song[]> {
    return Observable.create().pipe(
      startWith(1),
      merge(this.reload$),
      switchMap(() => {
        return this.http.get<Song[]>(this.baseUrl + '/songs');
      })
    );

  }
  getSong(id: string): Observable<Song> {
    return this.http.get<Song>(this.baseUrl + '/songs/' + id);

  }
  addSong(data: Partial<Song>): Observable<Song> {
    return this.http.post<Song>(this.baseUrl + '/songs', data).pipe(
      tap(song => this.reload$.next('new song'))
    );
  }
  editSong(id: number, data: Partial<Song>): Observable<Song> {
    return this.http.patch<Song>(this.baseUrl + '/songs/' + id, data).pipe(
      tap(song => this.reload$.next('song edited'))
    );
  }
}
