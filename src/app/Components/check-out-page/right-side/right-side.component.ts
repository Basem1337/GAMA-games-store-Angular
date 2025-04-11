import { Component, OnInit } from '@angular/core';
import { GameDetailComponent } from '../game-detail/game-detail.component';
import { CommonModule } from '@angular/common';
import { CartService } from '../../../Services/cart.services';
import { CartItem } from '../../../Models/CartItem';

@Component({
  selector: 'app-right-side',
  standalone: true,
  imports: [GameDetailComponent, CommonModule],
  templateUrl: './right-side.component.html',
  styleUrl: './right-side.component.css'
})
export class RightSideComponent implements OnInit {
  cart: CartItem[] = [];
  totals = { totalBeforeDiscount: 0, totalDiscount: 0, finalTotal: 0 };

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getCart().subscribe({
      next:(res)=>{
        console.log(res.items);
        this.cart = res.items
      },
      error:(res)=>{

      }
    })
  }

  calculateTotals(): void {
    let total = 0;
    let discount = 0;

    this.cart.forEach(item => {
      const itemTotal = item.price; 
      const itemDiscount = itemTotal * item.discount;
      total += itemTotal;
      discount += itemDiscount;
    });

    this.totals = {
      totalBeforeDiscount: total,
      totalDiscount: discount,
      finalTotal: total - discount,
    };
  }
}
