import { Component, OnInit } from '@angular/core';
import { SongService } from '../song.service';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss']
})
export class SongsComponent implements OnInit {

  songs$;

  constructor(private songService: SongService) { }

  ngOnInit() {
    this.songs$ = this.songService.getSongs();
  }

}
