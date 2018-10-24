import { Component, OnInit } from '@angular/core';
import { MusicService } from '../music.service';
import { Playlist } from '../models/playlist.model';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {

  playlists$;
  newPlaylist: Playlist;

  name = new FormControl('');

  constructor(private musicService: MusicService) { }
  ngOnInit() {
    this.playlists$ = this.musicService.getPlaylists();
  }

  public createPlaylist() {
    this.newPlaylist = {
      id: null,
      name: ''
    };
  }

  public savePlaylist() {
    this.newPlaylist.name = this.name.value;
    this.musicService.createPlaylist(this.newPlaylist).subscribe(res => {
      console.log('RES', res);
    });
    this.name.setValue('');
    this.newPlaylist = null;
  }

}
