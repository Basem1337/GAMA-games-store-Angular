import { Component } from '@angular/core';
import { GameService } from '../../../Services/products.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-free-games',
  imports: [CommonModule],
  templateUrl: './free-games.component.html',
  styleUrl: './free-games.component.css'
})
export class FreeGamesComponent {
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
