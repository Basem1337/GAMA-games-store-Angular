import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private readonly dbURL = 'http://localhost:3000'

  constructor(private http:HttpClient) { }

  register(user:any){
    return this.http.post(this.dbURL+"/users/register",user);
  }

  login(user:any){
    return this.http.post(this.dbURL+"/users/login",user);
  }
  
}
