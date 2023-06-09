import { DataSource } from "@angular/cdk/collections";
import { Product } from "./product.interface";
import { BehaviorSubject, Observable } from 'rxjs'

export class DataSourceProduct extends DataSource<Product> {
  private _cacheData: Product[] = [];
  private _data = new BehaviorSubject<Product[]>([])

  connect(): Observable<Product[]> {
    return this._data.asObservable()
  }

  init(products: Product[]) {
    this._cacheData = products;
    this._data.next(products);
  }

  getTotal() {
    const product = this._data.getValue();
    return product.map(item => item.price).reduce((price, total) => price + total, 0);
  }

  query(value: string | number, field: 'price' | 'title' | 'id') {
    const producs = this._data.getValue();

    if (typeof value === 'string' && value.length === 0) {
      this._data.next(this._cacheData);
      return;
    }

    if (!value) {
      this._data.next(this._cacheData);
      return;
    }

    if (['id', 'price'].includes(field)) {
      const newProducts = producs.filter(item => (item[field]) == value)
      this._data.next(newProducts);
      return;
    }

    if (field === 'title' && typeof value === 'string') {
      const newProducts = producs.filter(item => (item[field].toLocaleLowerCase().includes(value)))
      this._data.next(newProducts);
      return;
    }

    this._data.next(this._cacheData);
  }

  update(id: Product['id'], changes: Partial<Product>) {
    const products = this._data.getValue();
    const productPosition = products.findIndex(item => item.id === id)
    if (productPosition !== -1) {
      products[productPosition] = {
        ...products[productPosition],
        ...changes
      }

      this._data.next(products);
    } else {
      this._data.next(products);
    }
  }
  disconnect() {

  }
}