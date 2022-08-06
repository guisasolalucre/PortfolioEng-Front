import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/model/Person';
import { PersonService } from 'src/app/services/services-model/person.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  person: Person = new Person();

  logged: boolean = true;

  constructor(private personService:PersonService,
              private uiService: UiService) { }

  ngOnInit(): void {
    this.logged = this.uiService.canEdit();
    // console.log("header log: " + this.uiService.showEdition)

    this.personService.getData().subscribe(data => {
      this.person = data;
    })
  }
}
 