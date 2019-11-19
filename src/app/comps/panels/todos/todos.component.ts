import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';
import { UserService } from 'src/app/services/user.service';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'todos-panel',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor(public locationSVC:LocationService, public userSVC:UserService, public todosSVC:TodoService ) {
    console.log('TodosPanel constructor','userSVC.currentUserstodos=', this.userSVC.currentUserstodos);
   }

  ngOnInit() {
  }

  


  goBack(){
    this.locationSVC.currentLocation = "user-options";
  }

}
