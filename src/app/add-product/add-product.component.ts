import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../Product';
import { ProductService } from '../product.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product: Product;

  constructor(private productService:ProductService,private location:Location,private route:ActivatedRoute) {
    this.product = new Product();
   }

  ngOnInit(): void {

  }

  createProduct():void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.createProduct(this.product,id).subscribe(() => this.goBack());
  }

  goBack(): void{
    this.location.back();
  }

}
