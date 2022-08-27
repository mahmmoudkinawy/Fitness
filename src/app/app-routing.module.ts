import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from './pages/welcome/welcome.component';
import { RegisterComponent } from './pages/authentication/register/register.component';
import { LoginComponent } from './pages/authentication/login/login.component';
import { TrainingComponent } from './pages/training/training.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'training', component: TrainingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
