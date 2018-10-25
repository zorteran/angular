import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { UserLoginComponent } from './user-login/user-login.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'MapTodo';

  constructor(private dialog: MatDialog) {

  }

  onLogin() {
    console.log('login');
    const dialogRef = this.dialog.open(UserLoginComponent, {
      height: '400px',
      width: '600px'
    });
  }

}

