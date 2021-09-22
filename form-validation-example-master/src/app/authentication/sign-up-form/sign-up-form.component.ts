import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {
  submitted: boolean = false;

  registerForm: FormGroup = this.formBuilder.group({
    fullName: ['', {validators: [Validators.required], updateOn: 'change'}],
    email: ['', {validators: [Validators.required, Validators.email], updateOn: 'change'}],
    phone: ['', {updateOn: 'change'}],
    password: ['', {validators: [Validators.required, Validators.minLength(5)], updateOn: 'change'}],
    role: ['jobSeeker', {validators: [Validators.required], updateOn: 'change'}]
  });


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.setPhoneValidation();
  }

  // Properties
  get fullName() { return this.registerForm.get('fullName');}

  get email() { return this.registerForm.get('email'); }

  get phone() { return this.registerForm.get('phone'); }

  get password() { return this.registerForm.get('password'); }

  get role() { return this.registerForm.get('role'); }

  // Dynamic validation setup
  setPhoneValidation() {
    const phoneControl = this.registerForm.get('phone');
    // Default Validations
    phoneControl?.setValidators([Validators.pattern('^[0-9]*$'), Validators.required]);

    // Validations based on role
    this.role?.valueChanges.subscribe((role) => {
      if (role == 'jobSeeker') {
        phoneControl?.setValidators([Validators.pattern('^[0-9]*$'), Validators.required]);
      } else if (role == 'employee') {
        phoneControl?.setValidators([Validators.pattern('^[0-9]*$')]);
      }
      phoneControl?.updateValueAndValidity();
    })
  }

  submitForm() {
    console.log(this.registerForm.valid);
    this.submitted = true;
  }

}
