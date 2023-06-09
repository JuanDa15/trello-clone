import { Component, OnInit, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { Product } from 'src/app/interface/product.interface';
import { DataSourceProduct } from 'src/app/interface/products.data-source';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styles: [
  ]
})
export class TableComponent implements OnInit{
  public search = new FormControl()
  public searchParam = new FormControl<'id'| 'price'| 'title'>('id')
  public productsService = inject(ProductsService);
  public columns: string[] = ['Image','ID', 'Title', 'Price','Actions'];
  public data = new DataSourceProduct()
  ngOnInit(): void {
    this.productsService.getProducts();
    this.productsService.products$.subscribe({
      next: (val) => {
        this.data.init(val);
      }
    });

    this.search.valueChanges.pipe(
      debounceTime(300)
    ).subscribe({
      next: (val) => {
        this.data.query(this.search.value, this.searchParam.value!)
      }
    })
  }

  update( product: Product) {
    this.data.update(product.id, {
      price: 100000
    })
  }
}
