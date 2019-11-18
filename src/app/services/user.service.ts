import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  allUsers:User[] = []; 
  currentUser:User;
  
  constructor(private http:HttpClient) {
    this.getAllUsers(this.http);
   }

  

 getAllUsers(http:HttpClient):void {
    http.get('https://jsonplaceholder.typicode.com/users/')
    .subscribe(allUsersData =>{
      this.allUsers = allUsersData as User[];
    })
  }

}
