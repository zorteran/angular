import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserService } from './user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'MapTodo';

  constructor(private dialog: MatDialog, public userService: UserService) {

  }

  onLogin() {


    console.log('login');
    const dialogRef = this.dialog.open(UserLoginComponent, {
      height: '400px',
      width: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('the dialog was closed', result);
    });
  }


}

