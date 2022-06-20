import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import {HttpClient} from '@angular/common/http'
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  productsObtained: Product[] | undefined;


  constructor(private productService: ProductService) {
   }

  ngOnInit(): void {
     this.productService.getAllProducts().subscribe(e =>this.productsObtained=e);
  }
}