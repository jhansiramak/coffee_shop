import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from '../../services/authservice.service';
import { ReactiveFormsModule,FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 loginForm:FormGroup;
 errorMsg='';
 constructor(private fb:FormBuilder,private auth:AuthserviceService,private router:Router){
  this.loginForm=this.fb.group({
    username:['',Validators.required],
    password:['',Validators.required]
  })
 }
 login(){
  if(this.loginForm.invalid){
    this.errorMsg="All fields are required";
    return;
  }
  const{username,password}=this.loginForm.value;
  this.errorMsg='';
  let res=this.auth.login(username,password);
  if(res===200){
    this.router.navigate(['home']);
  }else if(res===403){
    this.errorMsg='Invalid credentials'
  }
 }
}
