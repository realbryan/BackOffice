import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class TaxService {
  private taxes  = new BehaviorSubject<any>({});
  selectedTaxes = this.taxes.asObservable();
  private taxesListBus = new BehaviorSubject<any>([]);
  taxList = this.taxesListBus.asObservable();
  
  constructor() {

  }

  setTax(tax: any) {
    this.taxes.next(tax);
  }

  setTaxList(taxes: any) {
    this.taxesListBus.next(taxes);
  }
}
