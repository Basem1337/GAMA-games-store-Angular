import { Component} from '@angular/core';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
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
