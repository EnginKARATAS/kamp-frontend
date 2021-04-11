import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductResponseModel } from 'src/app/models/productResponseModel';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  products: Product[] = [];
  productResponseModel: ProductResponseModel = {
    data: this.products,
    message: "",
    success: true
  }
  constructor(private productService:ProductService) { }
  dataLoaded = false;
  ngOnInit(): void {
    console.log("Init Çalıştı");
    this.getProducts();
  }
  getProducts() {
    this.productService.getProducts().subscribe(respons=>{
      this.products = respons.data
      this.dataLoaded = true;
    });
  }
}



