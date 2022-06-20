import { Injectable } from "@angular/core";
import { Product } from "../models/product.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private product: Product | undefined;
 
 
  private getAllProductsUrl = "http://localhost:8080/product/getProducts"; 
  private getOneProductsUrl = "http://localhost:8080/product/get/"; 
  private createOneProductUrl = "http://localhost:8080/product/createProduct"; 
  private updateProductUrl = "http://localhost:8080/product/updateProduct"; 


  constructor(private http: HttpClient) { }

  public getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.getAllProductsUrl);
  }

  public createProduct(product:Product): Observable<Product> {
    return this.http.post<Product>(this.createOneProductUrl, product)
  }

  public getProduct(id:number): Observable<Product> {
    return this.http.get<Product>(this.getOneProductsUrl + id);
  }

  public updateProduct(product:Product): Observable<Product> {
    return this.http.put<Product>(this.updateProductUrl, product)
  }

  public deleteProduct(id:number): Observable<Product> {
    return this.http.delete<Product>(this.getOneProductsUrl + id);
  }

}
