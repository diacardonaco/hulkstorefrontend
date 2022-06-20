import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { ProductService } from "../../services/product.service";
import { Product } from "../../models/product.model";


@Component({
  selector: 'app-consult-product',
  templateUrl: './consult-product.component.html',
  styleUrls: ['./consult-product.component.css']
})
export class ConsultProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
