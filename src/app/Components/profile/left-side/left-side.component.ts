import { Component } from '@angular/core';
import { GameCardComponent } from "../game-card/game-card.component";
import { GameService } from '../../../Services/products.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-left-side',
  imports: [GameCardComponent, CommonModule],
  templateUrl: './left-side.component.html',
  styleUrl: './left-side.component.css'
})
export class LeftSideComponent {
  games: any[] = [];
  
  constructor(private productService: GameService) {}

  ngOnInit(): void {
    this.loadGames();
  }

  loadGames(): void {
    this.productService.getAllGames().subscribe((data: any) => {
      this.games = data;
    });
  }
}
