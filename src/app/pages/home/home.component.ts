import { Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  //private http = inject();
  isChecked: boolean = true;
  products: any[] = [];
  index: number = 0;

  constructor() {
    () => {
      let number
    };
    this.getProducts();
    const name = 'Leo';
    let myNumber = 123;
    console.log(myNumber.toFixed);
  }

  ngOnInit(): void {}

  toogleCheck() {
    this.isChecked = !this.isChecked;
    this.getProducts();
  }

  async getProducts() {
    this.index++;
    const rta = await fetch('http://api.escuelajs.co/api/v1/products', {
      method: 'GET',
    });
    const data = await rta.json();
    this.products.push(data[this.index]);
    return this.products;
  }
}
