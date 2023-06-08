import { Component, OnInit, inject } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styles: [
  ]
})
export class ScrollComponent implements OnInit{
  public productsService = inject(ProductsService);

  ngOnInit() {
    this.productsService.getProducts();
  }
}
