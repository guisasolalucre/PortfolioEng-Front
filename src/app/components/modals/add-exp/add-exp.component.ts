import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { Experience } from 'src/app/model/Experience';

@Component({
  selector: 'app-add-exp',
  templateUrl: './add-exp.component.html',
  styleUrls: ['./add-exp.component.css']
})
export class AddExpComponent implements OnInit {

  @Output() onAddExperience: EventEmitter<Experience> = new EventEmitter();

  job:string ="";
  company:string="";
  ubication:string="";
  start:string="";
  finish:string="";
  description:string="";
  subscription?: Subscription;

  constructor(
    public modal:NgbModal,
  ) { }

  ngOnInit(): void {
  }

  onSubmit(formDetailUser: NgForm){
    const {job, company, ubication, start, finish, description} = this
    const newExperience : Experience = {job, company, ubication, start, finish, description}
    this.onAddExperience.emit(newExperience);
    formDetailUser.reset();
    //window.location.reload();
  }

}
