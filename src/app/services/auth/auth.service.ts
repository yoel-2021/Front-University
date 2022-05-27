import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient,private _httpRegister: HttpClient) { }

  authUser(userName: string, password:string){
    
    let body= {
      userName: userName,
      password: password
    }

    return this._http.post('https://localhost:7106/api/Account/GetToken', body);
  }

  authRegister(name:string, password:string, lastName:string, email:string, createBy:string, createdAt:Date, idUserType: Number, Id:Number,updateBy:string,updatedAt:Date,deleteBy:string,deletedAt:Date,isDeleted:string){
    let body= {
      name: name,
      password: password,
      lastName: lastName,
      email: email,
      createBy: createBy,
      createdAt: createdAt,
      idUserType : idUserType,
      Id: Id, 
      updateBy:updateBy,
      updatedAt:updatedAt,
      deleteBy:deleteBy,
      deletedAt:deletedAt,
      isDeleted:isDeleted

      
    }

    return this._httpRegister.post('https://localhost:7106/api/Users', body);  

  }
}
