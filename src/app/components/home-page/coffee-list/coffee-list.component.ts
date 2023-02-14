import { Component, OnInit } from '@angular/core';

import { Coffee } from '../../../models/coffee.model';
import { CoffeeService } from '../../../services/coffee.service';

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.css']
})
export class CoffeeListComponent implements OnInit {
  // @ts-ignore
  coffeeList: Coffee[];

  constructor(private service: CoffeeService) {
  }

  ngOnInit() {
    this.service.getCoffees().subscribe((coffees: Coffee[]) => {
      console.log(coffees)
      this.coffeeList = coffees
    });
  }
}
