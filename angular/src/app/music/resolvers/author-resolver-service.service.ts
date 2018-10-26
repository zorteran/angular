import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Artist } from '../models/artist.model';
import { Observable } from 'rxjs';
import { MusicService } from '../music.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorResolverServiceService implements Resolve<Artist[]> {

  constructor(private artist: MusicService) { }

  resolve(): Observable<Artist[]> {
    const ret = this.artist.getArtists();
    console.log('author resoler!', ret);

    return ret;
  }
}
