import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private _htpp: HttpClient, private _storageService: StorageService) { }


  getAllStudents():Observable<any>{

    let token = this._storageService.getStorage('jwtToken');

      return this._htpp.get('https://localhost:7106/api/students',
      {
        headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'Authorization': `Bearer:${token}`
        }
        )
      }
      )   
  }

}
