import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusicService } from '../music.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-playlist-profile',
  templateUrl: './playlist-profile.component.html',
  styleUrls: ['./playlist-profile.component.scss']
})
export class PlaylistProfileComponent implements OnInit {
  playlists$;
  playlistId$;
  constructor(private route: ActivatedRoute, private musicService: MusicService) { }

  ngOnInit() {
    this.playlistId$ = this.route.paramMap.pipe(
      switchMap((data) => {
        return data.get('id');
      }));
    this.playlists$ = this.route.paramMap.pipe(
      switchMap((data) => {
        return this.musicService.getPlaylistWithSongs(data.get('id'));
      })
    );
  }

}
