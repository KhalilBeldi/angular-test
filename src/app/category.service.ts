import { Injectable } from '@angular/core';
import { Category } from './Category';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private categoriesListUrl = 'http://localhost:8081/categories';

  constructor(private httpClient: HttpClient) { }

  getCatagories(): Observable<any[]>{

    return this.httpClient.get<Category[]>(this.categoriesListUrl);

  }

  createCategory(category: Object): Observable<Object>{
    return this.httpClient.post<Category>(this.categoriesListUrl,category);
  }

  getCategory(id: number): Observable<Category>{
    const url = `${this.categoriesListUrl}/${id}`;
    return this.httpClient.get<Category>(url);

  }

  updateCategory(id,category: Category): Observable<any>{
    return this.httpClient.put(`${this.categoriesListUrl}/${id}`, category);
  }

  deleteCategory(id):Observable<any>{
    return this.httpClient.delete(`${this.categoriesListUrl}/delete/${id}`);
  }
  

}

