import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { LottieAnimationViewModule } from 'ng-lottie';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    LottieAnimationViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
