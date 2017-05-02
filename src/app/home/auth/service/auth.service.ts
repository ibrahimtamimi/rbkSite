import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  constructor(private http : Http) { }

    signin(user) {
    	console.log("xxxxx")
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('api/user/signin', user, {headers: headers})
    .map(res => res.json());
     }

    storeInLocalStorage(token,id,name){
      localStorage.setItem('id_token', token);
      localStorage.setItem('user-id', id);
      localStorage.setItem('user-name', name);
    }

  signup(user){
  	let headers = new Headers();
  	headers.append('Content-Type' , 'application/json');
  	return this.http.post('api/user/signup', user , {headers:headers})
  	.map(res => res.json());


  }

}
