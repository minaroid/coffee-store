import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home-page/home.component";
import {CoffeeDetailComponent} from "./components/coffee-detail-page/coffee-detail.component";

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "coffee/:id", component: CoffeeDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
