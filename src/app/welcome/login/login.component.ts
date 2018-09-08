import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Message } from 'primeng/components/common/api';
import { Router } from '@angular/router';
import { ApiService } from '../../core/api.service';
import { TokenService } from '../../core/token.service';

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

  constructor(private fb: FormBuilder, private router: Router, private api: ApiService, private tokenService: TokenService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  login () {
    if (this.loginForm.invalid) {
      this.showError();
    } else {
      this.api.postAccount(this.loginForm.value).subscribe(
        data => {
          this.tokenService.setToken(data.toString());
          this.router.navigate(['/home']); 
        },
        error => this.showError()
      );
    }
  }

  showErrorNotification () {
    this.loginFormIsInvalid = true;
    setTimeout(function() {
      this.loginFormIsInvalid = false;
    }.bind(this), 7000);
  }

  showError() {
    this.showErrorNotification();
    this.msgs = [];
    this.msgs.push({severity: 'error', summary: 'Check your input'});
}

}
