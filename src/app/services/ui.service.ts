import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UiService {

  public showEdition: boolean = false;

  constructor() { }

  canEdit(): boolean{
    if(sessionStorage.getItem('login') !== null){
      this.showEdition = true;
    }
    // console.log("service checks if loged: " + this.showEdition)
    return this.showEdition;
  }

  logIn(): void {
    this.showEdition = true;
    // console.log("Loged in. Can edit: " + this.showEdition);
  }

  logOut(): void {
    this.showEdition = false;
    sessionStorage.removeItem('login');
    // console.log("Loged out. Can edit: " + this.showEdition);
  }

}
