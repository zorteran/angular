import { Component, OnInit } from '@angular/core';
import { Coords } from '../map/map.component';

export interface Todo {
  coords: Coords;
  name: string;
  done: boolean;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  todo: Todo;

  todos: Todo[] = [];

  constructor() { }

  ngOnInit() {
  }


  onMapClick(coords: Coords) {
    console.log('COORDS', coords);
    this.todo = {
      coords,
      name: '',
      done: false
    };
  }

  save() {

    this.todos.push(this.todo);
    this.todo = null;
  }
}
