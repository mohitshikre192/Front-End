import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';
import { Login } from '../app/models/login';
@Injectable({
  providedIn: 'root'
})
export class JwtDecodeService {

error (error:any)
{throw new Error("Method not implemented...");
}

 //readonly getlogin ="https://localhost:7034/api/Login/";
  constructor(private http:HttpClient,private router: Router) { }

// public getLoginT(login: Login):Observable<Login>
// {
//   let getlogin : string ="https://localhost:7034/api/Login/";
 
// //  return this.http.post(getlogin, login);
// }



}


