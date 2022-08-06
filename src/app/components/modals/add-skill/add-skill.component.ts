import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { Skill } from 'src/app/model/Skill';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css']
})
export class AddSkillComponent implements OnInit {

  @Output() onAddSkill: EventEmitter<Skill> = new EventEmitter();

  name: string = "";
  percent: number = 0;
  subscription?: Subscription;

  constructor(
    public modal: NgbModal,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(formDetailUser: NgForm){
    const {name, percent} = this
    const newSkill = {name, percent}
    this.onAddSkill.emit(newSkill);
    formDetailUser.reset();
    window.location.reload();
  }

}
