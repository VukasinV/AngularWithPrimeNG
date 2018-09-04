import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Message } from 'primeng/components/common/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginFormIsInvalid: boolean;
  msgs: Message[] = [];

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  login () {
    if (this.loginForm.invalid) {
      this.showErrorNotification();
      this.showError();
    } else {
      console.log('LoginComponent: Go to route /home');
      this.router.navigate(['home']);
    }
  }

  showErrorNotification () {
    this.loginFormIsInvalid = true;
    setTimeout(function() {
      this.loginFormIsInvalid = false;
    }.bind(this), 7000);
  }

  showError() {
    this.msgs = [];
    this.msgs.push({severity: 'error', summary: 'Check your input'});
}

}
