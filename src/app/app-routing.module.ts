import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AddProductComponent } from './add-product/add-product.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'categories',component: CategoriesComponent},
  {path: 'categories/update/:id', component: CategoryDetailComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {path: 'categories/add',component:AddCategoryComponent},
  {path: 'products/:id',component:ProductComponent},
  {path: 'products/detail/:id',component:ProductDetailComponent},
  {path: 'products/add/:id',component:AddProductComponent},
  {path: 'login',component:LoginComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
