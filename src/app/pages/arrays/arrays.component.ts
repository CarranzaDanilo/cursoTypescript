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
  productsFilterByPrice: Product[] = [];
  productsTotalByReduce: any;
  myArray: number[] = [];
  orders: any[] = [];
  ordersWithIVA: any[] = [];

  ngOnInit(): void {
    const orders = [
      {
        customerName: 'Nicolas',
        total: 60,
        delivered: true,
      },
      {
        customerName: 'Zelma',
        total: 120,
        delivered: false,
      },
      {
        customerName: 'Santiago',
        total: 180,
        delivered: true,
      },
      {
        customerName: 'Valentina',
        total: 240,
        delivered: true,
      },
    ];
    this.ordersWithIVA = orders.map((item) => {
      return {
        ...item,
        IVA: item.total * 0.21,
      };
    });
    this.orders = orders.map((item) => item.total);

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
        this.addIVA(this.products);
        this.filterProducts(this.products);
        this.totalByReduce(this.products);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  filterProducts(products: Product[]) {
    this.productsFilterByPrice = products.filter((item) => item.price > 500 && item.title.includes('Modern'));
  }

  addIVA(products: Product[]) {
    this.productsIncreased = products.map((item) => {
      return {
        ...item,
        price: item.price * 1.2,
      };
    });
  }

  totalByReduce(products: Product[]){
    this.productsTotalByReduce = products.reduce((total, product) => total + product.price, 0);
  }
}
