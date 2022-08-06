import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { Person } from 'src/app/model/Person';
import { PersonService } from 'src/app/services/services-model/person.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() window: string = 'login';

  person!: Person;

  loginForm: FormGroup | any;

  logged: boolean = false;
  subscription?: Subscription;

  constructor(
    public modal: NgbModal,
    private uiService: UiService,
    private router: Router,
    private personService: PersonService,
  ) { 
    this.loginForm = new FormGroup({
      us: new FormControl(''),
      pass: new FormControl('')
    });
   }

  ngOnInit(): void {
    this.personService.getData().subscribe(data => {
      this.person = data;
    });
  }

  onSubmit(){

    if (this.loginForm.value.us === this.person.user && 
      this.loginForm.value.pass === this.person.password){
      this.uiService.logIn();
      this.logged = this.uiService.canEdit();

      const logJSON = JSON.stringify(this.loginForm.value)
      sessionStorage.setItem('login', logJSON);

      // console.log("can edit: " + this.logged);
      this.router.navigate(['/portfolio'])
    }
    else {
      alert("Invalid user or password")
    }
  }

}
