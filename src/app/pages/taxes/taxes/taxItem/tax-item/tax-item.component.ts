import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tax-item',
  templateUrl: './tax-item.component.html',
  styleUrls: ['./tax-item.component.css']
})

export class TaxItemComponent {
  @Input() itemName : string
  @Input() tax : number

  constructor(){
    this.itemName = ''
    this.tax = 0.0
  }

  ngOnChange(event: any) {
    console.log('taxItem change',event);
  }

}
