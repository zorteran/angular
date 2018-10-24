import { Injectable, InjectionToken, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Artist } from './models/artist.model';
import { share, shareReplay, delay } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { BASE_URL } from '../app-config';
import { Playlist } from './models/playlist.model';
import { PlaylistSong } from './models/playlistSong.model';
import { Song } from './models/song.model';

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
  updateArtist(id: string, data: Partial<Artist>): Observable<any> {
    return this.http.patch<any>(this.baseUrl + '/artists/' + id, data);
  }
  getPlaylists(): Observable<Playlist[]> {
    return this.http.get<Playlist[]>(this.baseUrl + '/playlists').pipe(shareReplay());
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
}
