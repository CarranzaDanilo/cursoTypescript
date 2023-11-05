import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.scss'],
})
export class TypesComponent implements OnInit {
  youKnow: any = '';
  randomNumber: number = 0;
  isHigher: boolean = false;

  ngOnInit(): void {
    this.youKnow = this.getProducts();
    this.randomNumber = this.getNumbers();
  }

  getProducts(): string {
    //FUNCION ANONIMA AUTOEJECUTABLE
    let output = '';
    (() => {
      let myProductName = 'Product one';
      let myProductPrice = 34;

      output = `${myProductName.toUpperCase()} Price: ${myProductPrice}`;
    })();

    return output;
  }

  getNumbers() {
    let randomNumber = Math.random();
    this.isHigher = randomNumber >= 0.5 ? true : false;
    return randomNumber;
  }
}
