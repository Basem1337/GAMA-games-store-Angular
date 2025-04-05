import { Component} from '@angular/core';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { AboutPageComponent } from "./Components/about/about-page.component";


import { RouterOutlet } from '@angular/router';
import { ProfileComponent } from "./Components/profile/profile.component";

import { CheckOutPageComponent } from './Components/check-out-page/check-out-page.component';
import { ProcessingPageComponent } from "./Components/processing-page/processing-page.component";
import { SuccessPageComponent } from "./Components/success-page/success-page.component";
import { ErrorPageComponent } from './Components/error-page/error-page.component';
import { HeroComponent } from './Components/landing-page/hero/hero.component';
import { ArrivalComponent } from './Components/landing-page/arrival/arrival.component';
import { SalesComponent } from './Components/landing-page/sales/sales.component';
import { FreeGamesComponent } from './Components/landing-page/free-games/free-games.component';
import { CategoriesComponent } from './Components/landing-page/categories/categories.component';
import { SignupComponent } from './Components/signup/signup.component';
import { LoginComponent } from './Components/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // imports: [HeaderComponent, FooterComponent, RouterOutlet, ProfileComponent , AboutPageComponent,CheckOutPageComponent, ProcessingPageComponent, SuccessPageComponent,ErrorPageComponent]
  
  imports: [HeaderComponent,
    FooterComponent,
    HeroComponent,
    ArrivalComponent,
    SalesComponent,
    FreeGamesComponent,
    CategoriesComponent,
    SignupComponent,
    LoginComponent],
})
export class AppComponent {
  
}
