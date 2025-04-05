import { Component } from '@angular/core';
import { GameService } from '../../../Services/products.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-arrival',
  imports: [CommonModule],
  templateUrl: './arrival.component.html',
  styleUrl: './arrival.component.css'
})
export class ArrivalComponent {
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
