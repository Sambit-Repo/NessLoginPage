import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsingHeaderService {

  constructor(private httpclient : HttpClient) {}

  baseurl:string="http://localhost:8888/suser";
  user;
  
  httpOption = {
    headers : new HttpHeaders(
    {
      'userName' : 'sambit',
      'password' : '123456',
    })
  };

  getUser()
  {
    if(this.httpOption.headers.get("userName") == "sambit" && this.httpOption.headers.get("password") == "123456")
        {
          this.httpclient.get(this.baseurl,this.httpOption).
          subscribe((res : any)=>
          {
            this.user=res;
            console.log(this.user);
          })

          return this.user;
        }
    else
    {
      alert("WRONG HEADER");
    }
  }
}
