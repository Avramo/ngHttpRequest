import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  currentLocation:string = 'users-panel';
  
  constructor() { }

  changeLocation(newLocation:string):void{
    this.currentLocation = newLocation;
  }
}
