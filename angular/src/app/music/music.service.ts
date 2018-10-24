import { Injectable, InjectionToken, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, of } from 'rxjs';
import { Artist } from './models/artist.model';
import { share, shareReplay, delay, tap, startWith, switchMap, merge } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { BASE_URL } from '../app-config';
import { Playlist } from './models/playlist.model';
import { PlaylistSong } from './models/playlistSong.model';
import { Song } from './models/song.model';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  reload$ = new Subject();

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
  updateArtist(id: string, data: Partial<Artist>): Observable<any> {
    return this.http.patch<any>(this.baseUrl + '/artists/' + id, data);
  }
  getPlaylists(): Observable<Playlist[]> {
    return Observable.create().pipe(
      startWith(1),
      merge(this.reload$),
      switchMap(() => {
        return this.http.get<Playlist[]>(this.baseUrl + '/playlists');
      })
    );
  }
  getPlaylist(id: string): Observable<Playlist> {
    return this.http.get<Playlist>(this.baseUrl + '/playlists/' + id).pipe(shareReplay());
  }
  getPlaylistWithSongs(playlistId: string): Observable<PlaylistSong[]> {
    return this.http.get<PlaylistSong[]>(this.baseUrl + '/playlistSongs?_expand=song&playlistId=' + playlistId).pipe(shareReplay());
  }
  getSongs(): Observable<Song[]> {
    return this.http.get<Song[]>(this.baseUrl + '/songs').pipe(shareReplay());
  }
  createPlaylist(data: Partial<Playlist>): Observable<Playlist> {
    return this.http.post<Playlist>(this.baseUrl + '/playlists', data).pipe(
      tap(playlist => {
        this.reload$.next(1);
      })
    );
  }
  updatePlaylist(id: number, data: Partial<Playlist>): Observable<Playlist> {
    return this.http.patch<Playlist>(this.baseUrl + '/playlists/' + id, data).pipe(
      tap(playlist => {
        this.reload$.next(1);
      })
    );
  }
  deletePlaylist(id: number): Observable<any> {
    return this.http.delete<any>(this.baseUrl + '/playlists/' + id).pipe(
      tap(playlist => {
        this.reload$.next(1);
      })
    );
  }
}
