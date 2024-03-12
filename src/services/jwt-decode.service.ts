import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JwtDecodeService {

error (error:any)
{throw new Error("Method not implemented...");
}

public readonly getlogin ="";
  constructor(private http:HttpClient,private router: Router) { }

public  getLoginT(mobile:string,password: string,role: string) :any
{
  return this.http.get(this.getlogin + "mobile=" + mobile+"&password="+password+"&role="+role);
}




}


