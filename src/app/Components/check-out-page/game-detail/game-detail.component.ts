import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-game-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game-detail.component.html',
  styleUrl: './game-detail.component.css'
})
export class GameDetailComponent {
  @Input() gameName!: string;
  @Input() gamePoster!: string;
  @Input() gamePrice!: number;
  @Input() gameCompany!: string;
}
