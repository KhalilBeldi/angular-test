import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../Product';
import { ProductService } from '../product.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product : Product | undefined;

  constructor(private route: ActivatedRoute,private productService: ProductService,private location:Location) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProduct(id).subscribe(product => this.product = product);
  }

  save(): void{
    if(this.product){
      this.productService.updateProduct(this.product.id,this.product).subscribe(() => this.goBack())
    }
  }

  goBack(): void{
    this.location.back();
  }

}
