import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';
import { LocationService } from './location.service';
import { Todo } from '../models/todo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(public http:HttpClient, public userSVC:UserService, public locationSVC:LocationService) { }

  todoAPI:string = 'https://jsonplaceholder.typicode.com/todos?userId=' + this.userSVC.currentUser.id;
  

  getCurrentUsersTodos():void {
    this.locationSVC.changeLocation('todos-panel');
    this.http.get(this.todoAPI  )
    .subscribe(todos =>{
      this.userSVC.currentUserstodos = todos as Todo[];
    })
    console.log('func getCurrentUsersTodos: userId=',  this.userSVC.currentUser.id ,
     'todos=', this.userSVC.currentUserstodos );//buggggg   currentUserstodos is undefined 1st time, then always 1 behind
  }


}
