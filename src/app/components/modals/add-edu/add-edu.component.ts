import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { Education } from 'src/app/model/Education';

@Component({
  selector: 'app-add-edu',
  templateUrl: './add-edu.component.html',
  styleUrls: ['./add-edu.component.css']
})
export class AddEduComponent implements OnInit {

  @Output() onAddEducation: EventEmitter<Education> = new EventEmitter();

  career:string ="";
  institution:string="";
  ubication:string="";
  start:string="";
  finish:string="";
  subscription?: Subscription;

  constructor(
    public modal:NgbModal,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(formDetailUser: NgForm){
    const {career, institution, ubication, start, finish} = this
    const newEducation = {career, institution, ubication, start, finish}
    this.onAddEducation.emit(newEducation);
    formDetailUser.reset();
    //window.location.reload();
  }

}
