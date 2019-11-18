import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'users-panel',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(public usersSVC:UserService, public locationSVC:LocationService) { }

  ngOnInit() {
  }

  selectUser(selectedUser:User):void{
    console.log('func selectUser:',selectedUser);
    this.usersSVC.currentUser = selectedUser;
    this.locationSVC.currentLocation = 'user-options';
  }

}
