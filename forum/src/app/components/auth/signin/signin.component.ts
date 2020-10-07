import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  signInForm: FormGroup;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(): void {
    this.signInForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  get username(): AbstractControl {
    return this.signInForm.get('username');
  }

  get password(): AbstractControl {
    return this.signInForm.get('password');
  }

  onSubmit() {
    const credentials = {
      username: this.username.value,
      password: this.password.value,
    };
    this.authService.signin(credentials).subscribe(
      (userInfo) => {
        localStorage.setItem('token', userInfo.user.token);
        localStorage.setItem('image', userInfo.user.image);
        this.router.navigate(['/']);
      },
      (err) => {}
    );
  }
}
