import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular';

  hide = false;

  color = 'red';

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
}

