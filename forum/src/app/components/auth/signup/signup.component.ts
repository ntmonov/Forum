import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(): void {
    this.signUpForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      image: new FormControl('', [Validators.nullValidator]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      repeatPassword: new FormControl('', [Validators.nullValidator]),
    });
  }

  get username(): AbstractControl {
    return this.signUpForm.get('username');
  }

  get image(): AbstractControl {
    return this.signUpForm.get('image');
  }

  get password(): AbstractControl {
    return this.signUpForm.get('password');
  }

  get repeatPassword(): AbstractControl {
    return this.signUpForm.get('repeatPassword');
  }

  onSubmit() {
    const credentials = {
      username: this.username.value,
      image: this.image.value,
      password: this.password.value,
    };
    this.authService.signup(credentials).subscribe(
      (data) => {},
      (err) => {}
    );
  }
}
