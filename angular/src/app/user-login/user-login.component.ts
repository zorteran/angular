import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { fbind } from 'q';
import { MatDialogRef } from '@angular/material';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  user: any;

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialogRef<UserLoginComponent>,
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  onCancel() {
    this.dialog.close(null);
  }

  onLogin() {
    if (this.loginForm.valid) {
      const data = this.loginForm.value;
      this.userService.login(data.username, data.password).subscribe(user => {
        console.log('SUCCESS', user);
        this.dialog.close(null);
      }, (err) => {
        console.log('ERR', err);
      });
    }
  }
}
