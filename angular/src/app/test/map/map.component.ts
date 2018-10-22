import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';

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
  constructor() { }
  map: any = {};

  @Output() mapClick = new EventEmitter<Coords>();

  ngOnInit() {
    console.log(this.mapContainer.nativeElement, L);
    this.initializeMap();
  }


  initializeMap() {
    this.map = L.map(this.mapContainer.nativeElement).setView([52.226488, 21.001659], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    this.map.on('click', this.onMapClick, this);
  }

  onMapClick(e) {
    this.mapClick.next(e.latlng);
  }


}
