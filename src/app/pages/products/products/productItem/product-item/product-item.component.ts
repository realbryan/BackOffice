import { Component, Input, SimpleChanges } from '@angular/core';
import { TaxService } from 'src/app/common/TaxService';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})

export class ProductItemComponent {
  @Input() productName : string
  @Input() price : number
  @Input() taxOption : number
  taxList: any = [];
  total: number;
  itemPrice: number;

  constructor(private taxService: TaxService){
    this.productName = 'New Product'
    this.price = 0.0
    this.taxOption = 0.0
    this.total = 0.0
    this.itemPrice = this.price
  }

  ngOnInit(){
    this.taxService.taxList.subscribe((value) => {
      this.taxList = value
    })
  }

  ngOnChange(changes: SimpleChanges) {
    console.log(changes['taxOption'].currentValue)
    this.total = this.price + this.taxOption;
  }

  setTaxOption(value: number) {
    console.log(value);
    this.taxOption = value
  }

  onChange(){
    console.log(this.itemPrice);
    console.log(this.taxOption);
    var productPrice = +this.itemPrice;
    this.total = productPrice + ((this.taxOption/100) * productPrice);
  }
}
