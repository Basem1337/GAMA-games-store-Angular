import { Component } from '@angular/core';
import { GameService } from '../../../Services/products.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sales',
  imports: [CommonModule],
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.css'
})
export class SalesComponent {
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
