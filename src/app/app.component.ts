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

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HeaderComponent, FooterComponent, RouterOutlet, ProfileComponent , AboutPageComponent,CheckOutPageComponent, ProcessingPageComponent, SuccessPageComponent,ErrorPageComponent]
  
})
export class AppComponent {
  
}
