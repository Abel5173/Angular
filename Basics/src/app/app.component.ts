import { NgStyle } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], 
})
export class AppComponent { 
  products = [
    { id: 1, name: 'Product A', description: 'This is product A', price: 10 },
    { id: 2, name: 'Product B', description: 'This is product B', price: 20 },
    { id: 3, name: 'Product C', description: 'This is product C', price: 30 },
  ]
  selectedProduct: any;

  selectProduct(product: any){
    this.selectedProduct = product
  }
}