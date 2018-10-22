import { Component } from '@angular/core';

class Item{
  id:number;
  name:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'angular';

  hide = true;

  color: 'red' | 'green' = 'red';

  public items: Item[]= [
    {id:1, name: 'Lublin'},
    {id:2, name: 'Warszawa'},
    {id:3, name: 'Gdańsk'},
    {id:4, name: 'Rzeszów'},
    {id:5, name: 'Suwałki'},
  ];

  toggleHide() {
    this.hide = !this.hide;
  }

  toggleColor() {
    if (this.color === 'red') {
      this.color = 'green';
    } else {
      this.color = 'red';
    }
  }
  onItemClick(item){
    console.log('ITEM CLICKED', item);
  }
}

