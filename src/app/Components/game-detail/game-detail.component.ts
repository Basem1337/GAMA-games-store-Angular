import { Component, OnInit } from '@angular/core';
import {Game} from '../../Module/GameModule'
import { CommonModule } from '@angular/common';
import { GameService } from '../../Services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-detail',
  imports: [CommonModule],
  templateUrl: './game-detail.component.html',
  styleUrl: './game-detail.component.css'
})
export class GameDetailComponent implements OnInit {
  game: Game | null = null;
  isLoading = true;
  error: string | null = null;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly gameService: GameService
  ) { }

  ngOnInit(): void {
    console.log(this.game);
    
    this.route.params.subscribe(params => {
      const gameId = params['id']; 
      this.loadGameDetails(gameId);
    });
  }

  loadGameDetails(gameId: number): void {
    this.isLoading = true;
    this.error = null;

    this.gameService.getGameById(gameId).subscribe({
      next: (data) => {
        console.log(data);
        
        this.game = data;
        this.isLoading = false;
        console.log(data);
        
      },
      error: (err) => {
        this.error = 'Failed to load game details. Please try again.';
        this.isLoading = false;
        console.error('Error fetching game details:', err);
      }
    });
  }

  addToWishlist(gameId: number): void {
    // Implement wishlist functionality
    // event?.stopPropagation(); // Prevent navigation when clicking wishlist button
  }

  addToCart(gameId: number): void {
    // Implement cart functionality
    // event?.stopPropagation(); // Prevent navigation when clicking cart button
  }

  openTrailer():void{
    if (this.game?.trailer) {
      const url = this.game.trailer.startsWith('http') ? this.game.trailer : `https://${this.game.trailer}`;
      window.open(url, '_blank');
    } else {
      console.error('Trailer URL is not available');
    }
}
}