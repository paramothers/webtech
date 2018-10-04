import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Product } from './domain/model';

@Injectable()
export class ProductServiceService {

  constructor(private http: HttpClient) { }

  getProductData() {

    this.http.get('./assets/data/api/products.json').subscribe((data: Product[]) => {

      // const data = respose.json();

      console.log('Hai param ' + data);
    });
  }
}
