import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {

  id$;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id$ = this.route.paramMap;
  }

}
