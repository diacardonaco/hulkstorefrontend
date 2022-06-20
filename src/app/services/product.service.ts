import { Injectable } from "@angular/core";
import { Product } from "../models/product.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private product: Product | undefined;
  private allProductsUrl = "localhost:8080/product/getProducts"; 


  constructor(private http: HttpClient) { }

  public getAllProducts(): Observable<Product> {
    return this.http.get<Product>(this.allProductsUrl);
  }

}
