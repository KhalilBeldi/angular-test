import { Component, OnInit } from '@angular/core';
import { Category } from '../Category';
import { Location } from '@angular/common';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  category: Category;

  constructor(private categorySerivce: CategoryService,private location:Location) {
    this.category = new Category();
   }

  ngOnInit(): void {

  }

  createCategory(): void{
    this.categorySerivce.createCategory(this.category).subscribe(() => this.goBack());
  }

  goBack(): void{
    this.location.back();
  }

}
