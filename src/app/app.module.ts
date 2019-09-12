import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http'; 
import { UsingHeaderService } from './using_header.service';
import { UsingBasicAuthService } from './using_basic_auth.service';
import { UsingOAuthService } from './using_oauth.service';
import { ValidationService } from './validation.service';
import { OAuthModule } from 'angular-oauth2-oidc';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path:'login',
        component:LoginComponent
      }
    ]),
    HttpClientModule,
    OAuthModule.forRoot()
  ],
  providers: [ValidationService,UsingHeaderService,UsingBasicAuthService,UsingOAuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
