import { Component, OnInit } from '@angular/core';
import { MusicService } from '../music.service';
import { Observable } from 'rxjs';
import { Artist } from '../models/artist.model';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {


  public artists$: Observable<Artist[]>;  // $ na końcu - jeśli cos jest streamem

  constructor(private musicService: MusicService) { }

  ngOnInit() {
    this.artists$ = this.musicService.getArtists().pipe(
      delay(250)
    );
  }

}
