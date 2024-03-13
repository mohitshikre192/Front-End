import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormsModule,ReactiveFormsModule,Validators} from '@angular/forms';
import { ActivatedRoute,Router} from '@angular/router';
import { JwtDecodeService } from '../../services/jwt-decode.service';
import { ToastrService } from 'ngx-toastr';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Login } from '../../app/models/login';
import { Token } from '@angular/compiler';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,HttpClientModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

loginForm!:FormGroup;
loading=false;
submitted=false;
returnUrl!: string;
order:any;

loginobj:any={
  "mobile_no":"",
  "password":"",
  "role":""
};
errorMsg:any;
constructor(private formBuilder:FormBuilder,
  private route:ActivatedRoute,
  private router:Router,
  private service:JwtDecodeService,
  private http:HttpClient
    )
{  this.order=this.router.getCurrentNavigation()?.extras.state;
}

ngOnInit(): void {
  this.loginForm=this.formBuilder.group({
    mobile:['',[Validators.required]],
    password:['',Validators.required],
    role:['',Validators.required]
  });
  this.returnUrl=this.route.snapshot.queryParams['returnUrl'] || '/';
}
get f(){return this.loginForm.controls;}

// onSubmit()
// {
  // this.submitted =true;

  // if(this.loginForm.invalid)
  // {return;}
  // this.loading=true;
 
  // //this.service.getLoginT(this.loginobj)
  // .subscribe({
  //   next: () => {
  //     debugger
  //     // this.toast.success('Hello User', 'Welcome to ATA')
  //    alert("Login Successful!!!")
  //     const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  //         this.router.navigateByUrl(returnUrl);
  //         this.loginForm.reset();
  //   },
//     error: () => {

//       alert('login failed')
//       this.loading = false;
//       this.loginForm.reset();
//     }
//   })
  
  
// }

onLogin()
{
  //debugger;
  this.http.post('https://localhost:7034/api/Login/',this.loginobj)
.subscribe({
  next: () => {

  
    alert('login success:');
   // localStorage.setItem('loginToken')
    this.router.navigateByUrl('/home');
  },error: () => {

          alert('login failed')
    //       this.loading = false;
    //      this.loginForm.reset();

}
})

}

}
