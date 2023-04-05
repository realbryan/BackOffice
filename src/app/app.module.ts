import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge'; 
import { MatInputModule } from '@angular/material/input';
import { TaxesComponent } from './pages/taxes/taxes/taxes.component';
import { ProductsComponent } from './pages/products/products/products.component';
import { MatIconModule } from '@angular/material/icon';
import { TaxItemComponent } from './pages/taxes/taxes/taxItem/tax-item/tax-item.component'; 
import { MatListModule } from '@angular/material/list';
import { ProductItemComponent } from './pages/products/products/productItem/product-item/product-item.component'; 
import { MatSelectModule } from '@angular/material/select'; 
import { ProductService } from './common/ProductService';
import { TaxService } from './common/TaxService';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TaxesComponent,
    ProductsComponent,
    TaxItemComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    MatBadgeModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatSelectModule
  ],
  providers: [ProductService, TaxService],
  bootstrap: [AppComponent]
})
export class AppModule { }
