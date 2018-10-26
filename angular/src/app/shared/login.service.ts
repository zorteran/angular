import { Injectable } from '@angular/core';
import { UserService } from '../user.service';
import { Observable, of } from 'rxjs';
import { User } from '../music/models/user.model';
import { switchMap } from 'rxjs/operators';
import { UserLoginComponent } from '../user-login/user-login.component';
import { MatDialog } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private userService: UserService, private dialog: MatDialog) { }

  loginDialog(): Observable<User> {
    console.log('LOGIN Dialog');

    return this.userService.user$.pipe(
      switchMap(user => {

        if (!user) {
          const dialogRef = this.dialog.open(UserLoginComponent, {
            height: '400px',
            width: '600px',
          });

          return dialogRef.afterClosed();
        } else {
          return of(user);
        }
      })
    );

  }
}
