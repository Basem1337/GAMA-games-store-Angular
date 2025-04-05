import { Component} from '@angular/core';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';

import { RouterOutlet } from '@angular/router';
import { ProfileComponent } from "./Components/profile/profile.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HeaderComponent, FooterComponent, RouterOutlet, ProfileComponent],
})
export class AppComponent {
  
}
