import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private router:Router) { }
  login(uname:string,password:string){
    if(uname==="jhansi" && password==="1234"){
      return 200;
    }else{
      return 403;
    }
  }
  logout(){
    this.router.navigate(['login']);
  }
}
