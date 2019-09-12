import { Injectable } from '@angular/core';
import { UsingHeaderService } from './using_header.service';
import { UsingBasicAuthService } from './using_basic_auth.service';
import { UsingOAuthService } from './using_oauth.service';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor(
    private headerService : UsingHeaderService,
    private basicAuthService : UsingBasicAuthService,
    private oAuthService : UsingOAuthService
  ) { }

  flag:boolean;
  user;


  validation(data)
  {
    //this.user = this.headerService.user;
    this.user = this.basicAuthService.getUser();
    // this.user = this.oAuthService.user;

    if(data.username == this.user["userName"] && data.password == this.user["password"])
      {
        alert("Login Worked");
        this.flag=true;
      }
    else
    {
      alert("Incorrerct Credentials");
      this.flag=false;
    }
  
   return this.flag;
  }
}
