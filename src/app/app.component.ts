import { OnInit, Component, ViewChild, AfterViewInit } from '@angular/core';
import { ProductItemComponent } from './pages/products/products/productItem/product-item/product-item.component';
import { ProductService } from './common/ProductService';
import { TaxItemComponent } from './pages/taxes/taxes/taxItem/tax-item/tax-item.component';
import { TaxService } from './common/TaxService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild(ProductItemComponent) productList: any;
  @ViewChild(TaxItemComponent) taxList : any
  
  title = 'BackOffice';
  sessionId: any;
  selectedProduct: any;
  selectedTax: any;

  products = [
    { productName: 'Rice', price: 200 },
    { productName: 'Beans', price: 300 },
    { productName: 'Bananna', price: 400 },
  ];

  taxes = [
    { itemName: 'Texas', tax: 5 },
    { itemName: 'California', tax: 6 },
  ]

  constructor(private productService: ProductService, private taxService: TaxService) {}

  ngOnInit(): void {
    this.productService.selectedProducts.subscribe((value) => {
      this.selectedProduct = value;
    });
    
    this.productService.setProductList(this.products);

    this.taxService.taxList.subscribe((value) => {
      this.selectedTax = value;
    });
    
    this.taxService.setTaxList(this.taxes);
  }

  ngAfterViewInit(): void {
    this.sessionId = this.productList.sessionId;
  }
}
