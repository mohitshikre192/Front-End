import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';
import { Login } from '../app/models/login';
import { Users } from '../app/models/users';
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

public createUsers(customer: Users): Observable<Users> {
  //let functionUrl: string = this.baseUrl + 'api/createCustomer/';
  let functionUrl: string = 'https://localhost:7034/api/User/';
  console.log('Inside Service');
  console.log(customer);
  return this.http.post<Users>(functionUrl, customer).pipe(catchError(this.handleError));
}


private handleError(error: HttpErrorResponse) {

  let errorMsg: string = "";
  if (error.error instanceof ErrorEvent) {
    // Client Error
    errorMsg = "Error: $error.error.message"
  }
  else {
    // Server Error
    errorMsg = "Status: $(error.status) \n Message: error.message"
  }
  return throwError(errorMsg);
}


}


