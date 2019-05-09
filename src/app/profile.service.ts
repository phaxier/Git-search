// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// // import 'rxjs/add/operator/map';
// import { Observable } from 'rxjs';
// import { Repository } from './repository';
// import { rootRenderNodes } from '@angular/core/src/view';
// import { environment } from 'src/environments/environment.prod';

// @Injectable({
//   providedIn: 'root'
// })

// export class ProfileService {
//   private username: string;


//   constructor (private http: HttpClient) {
//     this.username = 'phaxier';
//   }

//   getUser():Observable<Repository[]> {
//     return this.http.get<Repository[]>('http://api.github.com/users/' + this.username+'?access_token='+environment.apikey);
//       // .map(res => res.json());
//   }

//   getRepos():Observable<Repository[]> {
//       return this.http.get<Repository[]>('http://api.github.com/users/' + this.username + '/repos?access_token='+environment.apikey)
//       // .map(res => res.json());
//   }

//   updateUser(username: string) {
//       this.username = username;
//   }

// }
