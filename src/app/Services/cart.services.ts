import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export interface CartItem {
  productId: string;
  quantity: number;
  title: string;
  price: number;
  discount: number;
  poster: string;
  company: string;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private apiUrl = 'http://localhost:3000/cart'; 
  private cartSubject = new BehaviorSubject<CartItem[]>([]);
  cart$ = this.cartSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadCart();
  }

  loadCart(): void {
    this.http.get<CartItem[]>(this.apiUrl).pipe(
      tap((cart) => {
        this.cartSubject.next(cart);
      }),
      catchError((error) => {
        console.error('Error loading cart', error);
        return [];
      })
    ).subscribe();
  }

  addToCart(productId: string): Observable<CartItem[]> {
    return this.http.post<CartItem[]>(this.apiUrl, { productId }).pipe(
      tap((cart) => {
        this.cartSubject.next(cart);
      }),
      catchError((error) => {
        console.error('Error adding to cart', error);
        throw error;
      })
    );
  }

// In CartService
removeItemFromCart(productId: string): Observable<CartItem[]> {
  return this.http.patch<CartItem[]>(`${this.apiUrl}/remove`, { productId }).pipe(
    tap((cart) => {
      this.cartSubject.next(cart);
    }),
    catchError((error) => {
      console.error('Error removing item from cart', error);
      throw error;
    })
  );
}

clearCart(): Observable<void> {
  return this.http.delete<void>(`${this.apiUrl}`).pipe(
    tap(() => {
      this.cartSubject.next([]); 
    }),
    catchError((error) => {
      console.error('Error clearing cart', error);
      throw error;
    })
  );
}
}
