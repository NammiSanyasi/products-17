import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  
  constructor(private httpClient: HttpClient) { }
  getAllProducts()
  {
    return this.httpClient.get('https://dummyjson.com/products');
  }
  getSearchProducts(st:any)
  {
    return this.httpClient.get(`https://dummyjson.com/products/search?q=${st}`);
  }
  getCategoryProducts(category:any)
  {
    return this.httpClient.get(`https://dummyjson.com/products/category/${category}`);
  }
}