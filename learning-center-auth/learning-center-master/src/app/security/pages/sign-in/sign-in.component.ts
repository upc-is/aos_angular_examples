import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent  {
  signInForm: FormGroup;

  constructor(public builder: FormBuilder,
              public authService: AuthService,
              public router: Router) {
    this.signInForm = this.builder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get email() { return this.signInForm.controls['email'];}

  get password() { return this.signInForm.controls['password'];}

  signIn() {
    this.authService.signIn(this.signInForm.value).subscribe((response: any) =>{
      localStorage.setItem('accessToken', JSON.stringify(response.accessToken));
      localStorage.setItem('currentUser', JSON.stringify(response.user));
      this.signInForm.reset();
      console.log(`accessToken: ${localStorage.getItem('accessToken')}`);
      this.router.navigate(['home']).then();

    });
  }

  cancelSignIn() {
    console.log('Cancelled');
  }




}
