import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productsList = 'http://localhost:8081/products';

  constructor(private httpClient:HttpClient) { }

  getProductsByCategoryId(id: number):Observable<any[]>{
    const url = `${this.productsList}/cat/${id}`
    return this.httpClient.get<Product[]>(url);
   }

   getProduct(id: number): Observable<Product>{
    const url = `${this.productsList}/${id}`;
    return this.httpClient.get<Product>(url);
  }

  updateProduct(id,product: Product): Observable<any>{
    return this.httpClient.put(`${this.productsList}/update/${id}`, product);
  }

  deleteProduct(id):Observable<any>{

    return this.httpClient.delete(`${this.productsList}/delete/${id}`);

  }

  createProduct(product:Product,id:number):Observable<any>{
    const url = `${this.productsList}/add/${id}`;
    return this.httpClient.post<Product>(url,product);
  }



}
