import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAllProducts() : Promise<Product[]>{
    return new Promise((resolve, reject) => {
      this.http.get('https://api.escuelajs.co/api/v1/products?offset=0&limit=10').subscribe(
        (data: any) => {
          resolve(data); // Resuelve la Promesa con los datos recibidos
        },
        (error) => {
          reject(error); // Rechaza la Promesa en caso de error
        }
      );
    });
  }
}
