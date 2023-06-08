import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../interface/product.interface';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private _products: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([])
  public products$: Observable<Product[]> = this._products.asObservable();

  constructor(
    private _http: HttpClient
  ) { }

  getProducts() {
    this._http.get<Product[]>(`https://api.escuelajs.co/api/v1/products`).subscribe({
      next: (data) => {
        this._products.next(data)
      }
    })
  }
}
