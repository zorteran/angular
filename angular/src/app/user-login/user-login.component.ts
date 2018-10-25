import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { fbind } from 'q';
import { MatDialogRef } from '@angular/material';

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

  constructor(private fb: FormBuilder, private dialog: MatDialogRef<UserLoginComponent>) { }

  ngOnInit() {
  }

  onCancel() {
    this.dialog.close();
  }

  onLogin() {
    console.log(this.loginForm.value);

  }
}
