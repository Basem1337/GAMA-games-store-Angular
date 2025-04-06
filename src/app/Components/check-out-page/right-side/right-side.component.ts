import { Component } from '@angular/core';
import { GameDetailComponent } from '../game-detail/game-detail.component';
import { GameService } from '../../../Services/products.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-right-side',
  imports: [GameDetailComponent, CommonModule],
  templateUrl: './right-side.component.html',
  styleUrl: './right-side.component.css'
})
export class RightSideComponent {
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
