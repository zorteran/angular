import { Component, OnInit, Input, Inject } from '@angular/core';
import { Artist } from '../models/artist.model';
import { BASE_URL } from 'src/app/app-config';

@Component({
  selector: 'app-artist-profile',
  templateUrl: './artist-profile.component.html',
  styleUrls: ['./artist-profile.component.scss']
})
export class ArtistProfileComponent implements OnInit {

  @Input() artist: Artist;

  constructor(@Inject(BASE_URL) private baseUrl: string) { }

  ngOnInit() {
  }

}
