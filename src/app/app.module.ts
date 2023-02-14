import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from "./components/header/header.component";
import {HomeComponent} from "./components/home-page/home.component";
import {CoffeeListComponent} from "./components/home-page/coffee-list/coffee-list.component";
import {CoffeeDetailComponent} from "./components/coffee-detail-page/coffee-detail.component";
import {CoffeeItemComponent} from "./components/home-page/coffee-list/coffee-item/coffee-item.component";
import {CoffeeService} from "./services/coffee.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CoffeeListComponent,
    CoffeeDetailComponent,
    CoffeeItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CoffeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }


