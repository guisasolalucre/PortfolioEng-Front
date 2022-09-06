import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { Education } from 'src/app/model/Education';

@Component({
  selector: 'app-edit-edu',
  templateUrl: './edit-edu.component.html',
  styleUrls: ['./edit-edu.component.css']
})
export class EditEduComponent implements OnInit {

  @Input() education!: Education;
  @Output() onEditEducation: EventEmitter<Education> = new EventEmitter();

  career:string ="";
  institution:string="";
  ubication:string="";
  start:string="";
  finish:string="";
  subscription?: Subscription;

  constructor(
    public modal:NgbModal,
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
    const editEdu : Education = { id, career, institution, ubication, start, finish };

    this.onEditEducation.emit(editEdu);
    
    formDetailUser.reset();

    window.location.reload();
  }

}
