import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Category } from '../Category';
import { CategoryService } from '../category.service';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import autoTable from 'jspdf-autotable';
import * as XLSX from 'xlsx'; 
import { ExcelService } from '../excel.service';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  @ViewChild('content',{static: false}) el!: ElementRef;

  categories: Category[] = [];
  
  constructor(private categoryService: CategoryService,private excelService:ExcelService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories():void {
    this.categoryService.getCatagories().subscribe(categories => this.categories = categories);
  }

  deleteCategory(id): void{
    if(confirm("Are you sure to delete this category ?")){
    this.categoryService.deleteCategory(id).subscribe( data=>{console.log(data);
      this.ngOnInit();
     },);
    }
  }

  makePdf(){
    const doc = new jsPDF()
    autoTable(doc, { html: '#category-table'})
    doc.save('categories.pdf')
  }

   exportAsXLSX():void {

    this.excelService.exportAsExcelFile(this.categories, 'categories');

 }

}
