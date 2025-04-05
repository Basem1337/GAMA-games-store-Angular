import { Component} from '@angular/core';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { CheckOutPageComponent } from './Components/check-out-page/check-out-page.component';
import { ProcessingPageComponent } from "./Components/processing-page/processing-page.component";
import { SuccessPageComponent } from "./Components/success-page/success-page.component";
import { ErrorPageComponent } from './Components/error/error-page.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HeaderComponent, FooterComponent, CheckOutPageComponent, ProcessingPageComponent, SuccessPageComponent,ErrorPageComponent],
})
export class AppComponent {
  
}
