import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from '../../services/authservice.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = "";
  password = "";
  errorMsg = "";
  constructor(private auth:AuthserviceService,private router:Router){}
  login(){
    if(this.username.trim().length===0){
      this.errorMsg="UserName is Required"
    }else if(this.password.trim().length===0){
      this.errorMsg="Password is required"
    }else{
      this.errorMsg="";
      let res=this.auth.login(this.username,this.password);
      if(res===200){
        this.router.navigate(['home'])
      }
      if(res==403){
        this.errorMsg="Invalid Credentials"
      }
    }
  }
}
