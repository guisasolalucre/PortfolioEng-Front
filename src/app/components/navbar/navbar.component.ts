import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/model/Person';
import { PersonService } from 'src/app/services/services-model/person.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  person: Person = new Person();

  logged: boolean = false;

  @Input() window: string = "login";

  constructor(private personService:PersonService,
              private uiService: UiService,
  ) { }

  ngOnInit(): void {

    this.logged = this.uiService.canEdit();
    // console.log("navbar log: " + this.logged)

    this.personService.getData().subscribe(data => {
      this.person = data;
    });

    // console.log(this.window)
  }

  logOut(){
    this.uiService.logOut();
    this.logged = this.uiService.canEdit();
    // console.log("can edit: " + this.logged);

    sessionStorage.removeItem('login')

    window.location.reload();
  }

}
