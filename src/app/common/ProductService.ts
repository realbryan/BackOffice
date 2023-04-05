import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ProductService {
  private products = new BehaviorSubject<any>({});
  selectedProducts = this.products.asObservable();
  private productListBus = new BehaviorSubject<any>([]);
  productList = this.productListBus.asObservable();
  
  constructor() {
    
  }

  setProduct(product: any) {
    this.products.next(product);
  }

  setProductList(products: any) {
    this.productListBus.next(products);
  }
}
