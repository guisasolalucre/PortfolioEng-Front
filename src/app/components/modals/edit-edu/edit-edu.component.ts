import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { Education } from 'src/app/model/Education';
import { EducationService } from 'src/app/services/services-model/education.service';

@Component({
  selector: 'app-edit-edu',
  templateUrl: './edit-edu.component.html',
  styleUrls: ['./edit-edu.component.css']
})
export class EditEduComponent implements OnInit {

  @Input() education!: Education;
  listEducation: Education[] = [];

  career:string ="";
  institution:string="";
  ubication:string="";
  start:string="";
  finish:string="";
  subscription?: Subscription;

  constructor(
    public modal:NgbModal,
    private educationService: EducationService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(formDetailUser: NgForm){
    const id = this.education.id;
    const career = this.career;
    const institution = this.institution;
    const ubication = this.ubication;
    const start = this.start;
    const finish = this.finish;
    const edit = { id, career, institution, ubication, start, finish };

    this.educationService.editEducation(edit).subscribe((data)=>(
      console.log(data)
    ));
    
    formDetailUser.reset();

    window.location.reload();
  }

}
