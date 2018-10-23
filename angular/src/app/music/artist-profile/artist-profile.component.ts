import { Component, OnInit, Input, Inject } from '@angular/core';
import { Artist } from '../models/artist.model';

@Component({
  selector: 'app-artist-profile',
  templateUrl: './artist-profile.component.html',
  styleUrls: ['./artist-profile.component.scss']
})
export class ArtistProfileComponent implements OnInit {

  @Input() artist: Artist;

  constructor() { }

  ngOnInit() {
  }

}
