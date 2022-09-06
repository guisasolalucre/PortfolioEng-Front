import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { Person } from 'src/app/model/Person';
import { PersonService } from 'src/app/services/services-model/person.service';

@Component({
  selector: 'app-edit-info',
  templateUrl: './edit-info.component.html',
  styleUrls: ['./edit-info.component.css']
})
export class EditInfoComponent implements OnInit {

  @Input() person!: Person;

  id: number = 0; 
  name: string = "";
  surname: string = ""
  about:string = "";
  ocupation: string = "";
  ubication: string = "";
  photo: string = "";
  banner: string = "";
  github: string = "";
  linkedin: string = "";
  whatsapp: string = "";
  email: string = "";
  user: string = "";
  password: string = "";
  subscription?: Subscription;

  constructor(
    public modal:NgbModal,
    private personService: PersonService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(formDetailUser: NgForm){
    const id = this.person.id;
    const name = this.person.name;
    const surname = this.person.surname;
    const about = this.about;
    const ocupation = this.ocupation;
    const ubication = this.ubication;
    const photo = this.photo;
    const banner = this.banner;
    const github = this.github;
    const linkedin = this.linkedin;
    const whatsapp = this.whatsapp;
    const email = this.email;
    const user = this.person.user;
    const password = this.person.password;

    const editPer: Person = { id, name, surname, about, ocupation, ubication, photo,
                  banner, github, linkedin, whatsapp, email, user, password };

    this.personService.editPerson(editPer).subscribe(()=>(
      console.log("edited")
    ));
    
    formDetailUser.reset();

    window.location.reload();
  }

}
