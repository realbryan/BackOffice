import { Component } from '@angular/core';
import { TaxItemComponent } from './taxItem/tax-item/tax-item.component';
import { TaxService } from 'src/app/common/TaxService';

@Component({
  selector: 'app-taxes',
  templateUrl: './taxes.component.html',
  styleUrls: ['./taxes.component.css']
})

export class TaxesComponent {
  selectedItems: any = []
  taxList: any = [];
  sessionId = Math.random();

  constructor(private taxService: TaxService) {
  }

  ngOnInit(){
    this.taxService.taxList.subscribe((value) => {
      this.taxList = value
    })
  }

  ngOnChange(event: any) {
    console.log('tax change',event);
  }

  addItem(): void{
    console.log("Adding item...");
    this.taxList.push(new TaxItemComponent());
  }

  deleteItem(): void{
    console.log("Deleting item...");
    // console.log(this.selectedItems);
    // this.data.taxes = this.data.taxes.filter((item) => !this.selectedItems.includes(item));
  }

  onNgModelChange(event : any){
    console.log(event);
    // this.selectedItems = event;
  }
}
