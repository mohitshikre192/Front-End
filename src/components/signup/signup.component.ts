import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Users } from '../../app/models/users';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtDecodeService } from '../../services/jwt-decode.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
user: any={};
constructor(private http: HttpClient,private router: Router,private service: JwtDecodeService){}

CreateUser(){
debugger;
this.service.createUsers(this.user)
.subscribe ({
   next: (data:any) => {
   

  alert('signup success:');
 //localStorage.setItem('logintoken',data.token)
  this.router.navigateByUrl('/home');
},error: () => {

        alert('signup failed')
       
  //       this.loading = false;
  //      this.loginForm.reset();

}
})
}
}
