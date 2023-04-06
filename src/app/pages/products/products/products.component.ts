import { Component } from '@angular/core';
import { ProductService } from 'src/app/common/ProductService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})


export class ProductsComponent {
   productList: any = [];
   sessionId = Math.random();
   
  constructor(private productService: ProductService, private router: Router) {
  }

  ngOnInit() {
    this.productService.productList.subscribe((value) => {
      this.productList = value;
    });
  }

  addItem(): void {
    console.log("Adding item...")
    //this.productList.push(new ProductItemComponent(this.data));
  }

  deleteItem(): void {
    console.log("Deleting item...")
    // console.log(this.selectedItems);
    // this.taxes = this.taxes.filter((item) => !this.selectedItems.includes(item));
  }

  navigateTaxes(): void {
    this.router.navigate(['/taxes']);
  }
}
