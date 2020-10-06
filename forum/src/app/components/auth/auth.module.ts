import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SignupComponent } from './signup/signup.component';
import { AuthService } from 'src/app/services/auth.service';

@NgModule({
  declarations: [SignupComponent],
  imports: [CommonModule, ReactiveFormsModule],
  providers: [AuthService],
})
export class AuthModule {}
