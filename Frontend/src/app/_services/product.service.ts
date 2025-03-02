import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../_model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }

  public addProduct(product:FormData){
    return this.httpClient.post<Product>("http://localhost:9090/addNewProduct", product);
  }
  public getAllProducts(){
    return this.httpClient.get<Product[]>("http://localhost:9090/getAllProducts");
  }
  public getProductDetailsById(productId){
    return this.httpClient.get<Product>("http://localhost:9090/getProductDetailsById/"+productId);
  }
  public deleteProduct(productId: number){
    return this.httpClient.delete("http://localhost:9090/deteleProductDetails/"+productId);
  }
}
