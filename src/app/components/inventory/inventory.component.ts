import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  public productsObtained: Product[] | undefined
  public data: Product[] | undefined

  constructor(private http: HttpClient) {
    this.http.get('http://localhost:8080/product/getProducts').subscribe(data => this.productsObtained)
   }

  ngOnInit(): void {
     this.data = this.productsObtained
  }

}
