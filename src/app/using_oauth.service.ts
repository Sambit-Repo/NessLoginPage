import { Injectable } from '@angular/core';
import { OAuthModule } from 'angular-oauth2-oidc';

@Injectable({
  providedIn: 'root'
})
export class UsingOAuthService {

  constructor(private module : OAuthModule) { }

  baseurl:string = "http://localhost:8888/user";
  user;

  getUser(){}
}
