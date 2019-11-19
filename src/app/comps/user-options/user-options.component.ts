import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'user-options',
  templateUrl: './user-options.component.html',
  styleUrls: ['./user-options.component.css']
})
export class UserOptionsComponent implements OnInit {

  constructor(public locationSVC:LocationService, public usersSVC:UserService, public todosSVC:TodoService ) { }
  

  toggleUser(direction:number){
    let lastIndex = this.usersSVC.allUsers.length-1;
    let currentIndex = this.usersSVC.allUsers.indexOf(this.usersSVC.currentUser);
    let newIndex = currentIndex + direction;
    if (newIndex <= lastIndex && newIndex >= 0) {
      this.usersSVC.currentUser = this.usersSVC.allUsers[newIndex];
    }
  }
  goBack(){
    this.locationSVC.currentLocation = "users-panel";
  }
  ngOnInit() {
  }

}
