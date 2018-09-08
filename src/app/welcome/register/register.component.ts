import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ApiService } from '../../core/api.service';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private api: ApiService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      email: new FormControl('', Validators.required),
      fullname: new FormControl('', Validators.required)
    });
  }

  register(form: NgForm) {
    this.api.postUser(form.value).subscribe(
      data => this.navigateToLogin()
    );
  }

  navigateToLogin() {
    this.router.navigate(['']);
  }

}
