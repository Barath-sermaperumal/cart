import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pType } from '../model/interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http:HttpClient) { }
  getAllProducts():Observable<pType[]>{
    return this.http.get<pType[]>('https://fakestoreapi.com/products');
  }  
}
