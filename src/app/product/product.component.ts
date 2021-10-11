import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[] = [];
  categoryId : number;

  constructor(private productService: ProductService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getProductsByCategory();
  }

  getProductsByCategory(): void{
    
    this.categoryId = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProductsByCategoryId(this.categoryId).subscribe(products => this.products = products);
    console.log(this.products)
  }

  deleteProduct(id): void{
    if(confirm("Are you sure to delete this product ?")){
    this.productService.deleteProduct(id).subscribe( data=>{console.log(data);
      this.ngOnInit();
     },);
    }
  }


}
