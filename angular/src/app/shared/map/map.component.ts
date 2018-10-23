import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output, Input } from '@angular/core';
import { Artist } from 'src/app/music/models/artist.model';

export interface Coords {
  lat: number;
  lng: number;
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  @ViewChild('mapContainer') mapContainer: ElementRef;
  @Input() artist: Artist;
  constructor() { }
  map: any = {};

  @Output() mapClick = new EventEmitter<Coords>();

  ngOnInit() {
    console.log(this.mapContainer.nativeElement, L);
    this.initializeMap();
  }


  initializeMap() {
    const lat = this.artist != null ? this.artist.location.lat : 51.505;
    const lng = this.artist != null ? this.artist.location.lng : -0.09;

    this.map = L.map(this.mapContainer.nativeElement).setView([lat, lng], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    if (this.artist != null) {
      L.marker([lat, lng]).addTo(this.map)
        .bindPopup(this.artist.name)
        .openPopup();
    }

    this.map.on('click', this.onMapClick, this);
  }

  onMapClick(e) {
    this.mapClick.next(e.latlng);
  }


}
