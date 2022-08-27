import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrentTrainingComponent } from './pages/training/current-training/current-training.component';
import { NewTrainingComponent } from './pages/training/new-training/new-training.component';
import { PastTrainingComponent } from './pages/training/past-training/past-training.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { RegisterComponent } from './pages/authentication/register/register.component';
import { LoginComponent } from './pages/authentication/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrentTrainingComponent,
    NewTrainingComponent,
    PastTrainingComponent,
    WelcomeComponent,
    RegisterComponent,
    LoginComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
