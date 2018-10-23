import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, delay } from 'rxjs/operators';
import { MusicService } from '../music.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {
  artist$;

  constructor(private route: ActivatedRoute, private musicService: MusicService) { }

  ngOnInit() {
    this.artist$ = this.route.paramMap.pipe(
      switchMap((data) => {
        return this.musicService.getArtist(data.get('id'));
      })
    );
  }



}
