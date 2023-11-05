import { AfterViewInit, Component, OnInit, inject } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-arrays',
  templateUrl: './arrays.component.html',
  styleUrls: ['./arrays.component.scss'],
})
export class ArraysComponent implements OnInit {
  productService = inject(ProductService);
  products: Product[] = [];
  productsIncreased: Product[] = [];
  myArray: number[] = [];

  ngOnInit(): void {
    this.getPrices();
    this.getProducts();
  }


  getPrices() {
    let prices = [12, 25, 36, 89, 96, 21, 15];
    prices.push(88);
    prices = prices.map((item) => item * 2);
    prices.sort();
    this.myArray = prices;
  }

  getProducts() {
    this.productService
      .getAllProducts()
      .then((resp: Product[]) => {
        this.products = resp;
        // Mapea los productos y guárdalos en productsIncreased cuando los datos estén disponibles.
        this.productsIncreased = this.products.map((item) => {
          return {
            ...item,
            price: item.price * 1.2,
          };
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
