import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MusicService } from '../music.service';
import { switchMap } from 'rxjs/operators';
import { Song } from '../models/song.model';
import { PlaylistSong } from '../models/playlistSong.model';

@Component({
  selector: 'app-add-song',
  templateUrl: './add-song.component.html',
  styleUrls: ['./add-song.component.scss']
})
export class AddSongComponent implements OnInit {

  playlist$;
  songs$;
  playlistId: string;
  constructor(private route: ActivatedRoute, private musicService: MusicService, private router: Router) { }

  ngOnInit() {
    this.playlist$ = this.route.paramMap.pipe(
      switchMap((data) => {
        this.playlistId = data.get('id');
        return this.musicService.getPlaylist(this.playlistId);
      })
    );
    this.songs$ = this.musicService.getSongs();
  }

  addSong(song: Song) {
    console.log('SONG', song);

  }

}
