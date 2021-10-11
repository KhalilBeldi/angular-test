import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../Category';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {

  category: Category | undefined;
  
  constructor(private route:ActivatedRoute,private categoryService: CategoryService,private location:Location) { }

  ngOnInit(): void {
    this.getCategory();
  }

  
  getCategory(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.categoryService.getCategory(id).subscribe(category => this.category = category);
  }


  save(): void{
    if(this.category){
      this.categoryService.updateCategory(this.category.id,this.category).subscribe(() => this.goBack())
    }
  }

  goBack(): void{
    this.location.back();
  }

}
