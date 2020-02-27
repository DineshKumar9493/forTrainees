import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginFormGroup: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initLoginForm();
  }

  initLoginForm() {
    this.loginFormGroup = this.formBuilder.group(
      {
        'login_email' : ['', [Validators.required, Validators.email]],
        'login_password': ['', [Validators.required]]
      }
    );
  };
  
  do(e: string) {
    switch(e) {
      case 'login' : {
        this.login();
        break;
      }
      default: break;
    }
  };

  login() {
    if(this.loginFormGroup.status === 'VALID') {
      console.log("Success");
    } else {
      console.error("Error");
    }
  }

  goto(e: string) {
    this.router.navigateByUrl('/');
  }

}
