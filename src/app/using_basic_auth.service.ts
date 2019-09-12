import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsingBasicAuthService {

  constructor(private http : HttpClient) { }

  baseurl:string = "http://localhost:8888/user";
  user = [];

  // httpOption = {
  //   headers : new HttpHeaders(
  //     {
  //       'Content-Type':  'application/json',
  //       'Authorization': 'Basic' + btoa("sambit:sambit")
  //     }
  //   ) 
  // };
  getUser()
  {      
    let username = 'sambit';
    let password = 'sambit';
    
      const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
      this.http.get(this.baseurl,{headers}).
      subscribe((res : any[])=>
      {
        this.user=res;
        console.log(this.user);
        
      });
  
    return this.user[4];
  }
}

