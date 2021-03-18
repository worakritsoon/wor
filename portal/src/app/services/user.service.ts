import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {
  }

  getUserRandom() {
   return this.httpClient.get('https://randomuser.me/api/?results=50').pipe(
    map((data: any) => data))}

  // getUser() {
  //   this.http
  //     .get('https://randomuser.me/api/', {}, {})
  //     .then((data) => {
  //       console.log(data.status);
  //       console.log(data.data); // data received by server
  //       console.log(data.headers);
  //     })
  //     .catch((error) => {
  //       console.log(error.status);
  //       console.log(error.error); // error message as string
  //       console.log(error.headers);
  //     });
  // }
}
