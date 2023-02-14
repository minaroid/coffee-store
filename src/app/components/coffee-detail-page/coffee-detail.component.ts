import {Component, OnInit, Input, OnDestroy} from '@angular/core';

import {Coffee} from '../../models/coffee.model';
import {ActivatedRoute, Params} from "@angular/router";
import {Subscription} from "rxjs";
import {CoffeeService} from "../../services/coffee.service";

@Component({
  selector: 'app-coffee-detail-page',
  templateUrl: './coffee-detail.component.html',
  styleUrls: ['./coffee-detail.component.css']
})
export class CoffeeDetailComponent implements OnInit, OnDestroy {
  // @ts-ignore
  routeObsSubscription: Subscription
  // @ts-ignore
  coffeeObsSubscription: Subscription
  // @ts-ignore
  coffee: Coffee

  // @ts-ignore

  constructor(private service: CoffeeService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.routeObsSubscription = this.route.params.subscribe((params: Params) => {
       this.coffeeObsSubscription = this.service.getCoffeeByUid(params['uid']).subscribe((coffee) =>{
         this.coffee = coffee
      })
    })
  }

  ngOnDestroy(): void {
    this.routeObsSubscription.unsubscribe()
    this.coffeeObsSubscription.unsubscribe()
  }

}
