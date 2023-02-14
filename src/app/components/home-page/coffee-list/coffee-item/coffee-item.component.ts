import { Component, Input } from '@angular/core';

import { Coffee } from '../../../../models/coffee.model';

@Component({
  selector: 'app-coffee-item',
  templateUrl: './coffee-item.component.html',
  styleUrls: ['./coffee-item.component.css']
})
export class CoffeeItemComponent  {
  // @ts-ignore
  @Input() coffee: Coffee;

  constructor() { }


}
