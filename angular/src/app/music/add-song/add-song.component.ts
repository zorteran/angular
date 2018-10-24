import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MusicService } from '../music.service';
import { switchMap } from 'rxjs/operators';
import { Song } from '../models/song.model';

@Component({
  selector: 'app-add-song',
  templateUrl: './add-song.component.html',
  styleUrls: ['./add-song.component.scss']
})
export class AddSongComponent implements OnInit {

  playlist$;
  songs$;

  constructor(private route: ActivatedRoute, private musicService: MusicService, private router: Router) { }

  ngOnInit() {
    this.playlist$ = this.route.paramMap.pipe(
      switchMap((data) => {
        return this.musicService.getPlaylist(data.get('id'));
      })
    );
    this.songs$ = this.musicService.getSongs();
  }

  addSong(song: Song) {
    console.log('SONG', song);

  }

}
