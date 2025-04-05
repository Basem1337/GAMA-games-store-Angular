import { Component} from '@angular/core';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { AboutPageComponent } from "./Components/about/about-page.component";


import { RouterOutlet } from '@angular/router';
import { ProfileComponent } from "./Components/profile/profile.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HeaderComponent, FooterComponent, RouterOutlet, ProfileComponent , AboutPageComponent]
  
})
export class AppComponent {
  
}
