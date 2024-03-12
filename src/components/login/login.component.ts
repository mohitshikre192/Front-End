import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,ReactiveFormsModule,Validators} from '@angular/forms';
import { ActivatedRoute,Router} from '@angular/router';
import { JwtDecodeService } from '../../services/jwt-decode.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

loginForm!:FormGroup;
loading=false;
submitted=false;
returnUrl!: string;
order:any;

login:any={}
errorMsg:any;
constructor(private formBuilder:FormBuilder,
  private route:ActivatedRoute,
  private router:Router,
  private service:JwtDecodeService,
  private toast:ToastrService
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

onSubmit()
{
  this.submitted =true;

  if(this.loginForm.invalid)
  {return;}
  this.loading=true;
 
  this.service.getLoginT(this.f["mobile"].value,this.f["password"].value,this.f["role"].value)
  .subscribe({
    next: () => {
      this.toast.success('Hello User', 'Welcome to ATA')
      const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
          this.router.navigateByUrl(returnUrl);
          this.loginForm.reset();
    },
    error: () => {

      this.toast.error('Try again', 'incorrect mobile number or password!!!')
      this.loading = false;
      this.loginForm.reset();
    }
  })
  
  
}

}
