import { Component, OnInit } from '@angular/core';
import { MusicService } from '../music.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {

  constructor(private musicService: MusicService) { }
  mouseOvered = false;
  playlists$;
  ngOnInit() {
    this.playlists$ = this.musicService.getPlaylists();
  }

}
