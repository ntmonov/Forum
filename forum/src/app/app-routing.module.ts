import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './components/auth/signup/signup.component';
import { ForumComponent } from './components/forums/forum/forum.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ForumComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
