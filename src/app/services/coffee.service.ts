import {Injectable} from '@angular/core';

import {Coffee} from '../models/coffee.model';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable()
export class CoffeeService {

  private images: string[] = [
    "https://fastly.4sqi.net/img/general/600x600/51493709_TTNjQE9B0woMABrcobmeZa21FSd2qv0WqwV8KCD8XR4.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVgfEC7cMHOfkucDPUIyGyZVP0zaYJEBom-IoYYM-jsd58PUXV7xwsOnUKzBhgkZ4nNVc&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJWIvExhmjeHVYSQxY7ylQZTV6ETrBopOerq9aseQc5BkjwHxZxcwxg4VbWryAhmoR5Bw&usqp=CAU",
    "https://media-cdn.tripadvisor.com/media/photo-s/18/6a/a3/ca/starbucks.jpg",
    "https://images.unsplash.com/photo-1565600444102-063f8a7a1e37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHN0YXJidWNrc3xlbnwwfHwwfHw%3D&w=1000&q=80",
  ]

  constructor(private httpClient: HttpClient) {}

  getCoffees() {
    return this.httpClient.get<Coffee[]>("https://random-data-api.com/api/coffee/random_coffee?size=30")
      .pipe(map(response => {
        response.forEach((coffee) => {
          coffee.imagePath = this.images[Math.floor(Math.random() * this.images.length)]
        })
        return response
      }))
  }

  // fake request will return a random coffee.
  getCoffeeByUid(uid: String) {
    return this.httpClient.get<Coffee>("https://random-data-api.com/api/coffee/random_coffee?uid="+ uid)
      .pipe(map(response => {
        response.imagePath = this.images[Math.floor(Math.random() * this.images.length)]
        return response
      }))
  }
}
