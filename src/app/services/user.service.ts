import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  allUsers:User[] = []; 
  currentUser:User;
  currentUserstodos:Todo[];
  
  constructor(private http:HttpClient) {
    this.getAllUsers();
   }

  

 getAllUsers():void {
    this.http.get('https://jsonplaceholder.typicode.com/users/')
    .subscribe(allUsersData =>{
      this.allUsers = allUsersData as User[];
    })
  }

}
