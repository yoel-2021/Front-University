import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) { }

  authUser(userName: string, password:string){
    
    let body= {
      userName: userName,
      password: password
    }

    return this._http.post('https://localhost:7106/api/account/getToken', body)
  }




}
