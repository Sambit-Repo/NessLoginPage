import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ValidationService } from './validation.service';
import { UsingHeaderService } from './using_header.service';
import { UsingBasicAuthService } from './using_basic_auth.service';
import { UsingOAuthService } from './using_oauth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {

  constructor(
    private router : Router,
    private service : ValidationService,
    private hs : UsingHeaderService,
    private bas : UsingBasicAuthService,
    private os : UsingOAuthService
    ){}

  title = 'Welcome To NessLoginPage';
  result;

  ngOnInit()
  {
    //this.hs.getUser();
    this.bas.getUser();
    // this.os.getUser();
  }
  onClick(data)
  {
    this.result=this.service.validation(data);
    if(this.result == true)
    {
      this.router.navigate(['login']);
    }
  }

}
