import { Component} from '@angular/core';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { CheckOutPageComponent } from './Components/check-out-page/check-out-page.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HeaderComponent,FooterComponent,CheckOutPageComponent],
})
export class AppComponent {
  
}
