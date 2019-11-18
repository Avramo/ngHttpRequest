import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'user-options',
  templateUrl: './user-options.component.html',
  styleUrls: ['./user-options.component.css']
})
export class UserOptionsComponent implements OnInit {

  constructor(public locationSVC:LocationService, public usersSVC:UserService ) { }

  goBack(){
    this.locationSVC.currentLocation = "users-panel";
    this.usersSVC.currentUser = null;
  }
  ngOnInit() {
  }

}
