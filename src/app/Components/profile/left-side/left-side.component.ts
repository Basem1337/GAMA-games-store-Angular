import { Component } from '@angular/core';
import { GameCardComponent } from "../game-card/game-card.component";

@Component({
  selector: 'app-left-side',
  imports: [GameCardComponent],
  templateUrl: './left-side.component.html',
  styleUrl: './left-side.component.css'
})
export class LeftSideComponent {

}
