import { Component, OnInit, Input } from '@angular/core';
import { Song } from '../models/song.model';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss']
})
export class SongComponent implements OnInit {
  @Input() song: Song;
  constructor() { }

  ngOnInit() {
  }

}
