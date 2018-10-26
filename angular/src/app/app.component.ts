import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserService } from './user.service';
import { LoginService } from './shared/login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'MapTodo';

  constructor(public loginService: LoginService, private dialog: MatDialog, public userService: UserService) {

  }

  onLogin() {


    console.log('login');
    this.loginService.loginDialog().subscribe();
  }


}

