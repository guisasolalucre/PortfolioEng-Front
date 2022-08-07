import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { Experience } from 'src/app/model/Experience';

@Component({
  selector: 'app-edit-exp',
  templateUrl: './edit-exp.component.html',
  styleUrls: ['./edit-exp.component.css']
})
export class EditExpComponent implements OnInit {

  @Input() experience!: Experience;
  @Output() onEditExperience: EventEmitter<Experience> = new EventEmitter();

  job:string ="";
  company:string="";
  ubication:string="";
  start:string="";
  finish:string="";
  description:string="";
  subscription?: Subscription;

  constructor(
    public modal:NgbModal
  ) { }

  ngOnInit(): void {
  }

  onSubmit(formDetailUser: NgForm){
    const id = this.experience.id;
    const job = this.job;
    const company = this.company;
    const ubication = this.ubication;
    const start = this.start;
    const finish = this.finish;
    const description = this.description;
    const editExp : Experience = { id, job, company, ubication, start, finish, description };

    this.onEditExperience.emit(editExp)
    
    formDetailUser.reset();

    //window.location.reload();
  }

}
