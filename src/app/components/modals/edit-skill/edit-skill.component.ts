import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { Skill } from 'src/app/model/Skill';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {

  @Input() skill!: Skill;
  @Output() onEditSkill: EventEmitter<Skill> = new EventEmitter();

  name:string ="";
  percent:number=0;
  subscription?: Subscription;

  constructor(
    public modal:NgbModal
  ) { }

  ngOnInit(): void {
  }

  onSubmit(formDetailUser: NgForm){
    const id = this.skill.id;
    const name = this.name;
    const percent = this.percent;
    const editSkill = { id, name, percent };

    this.onEditSkill.emit(editSkill)
    
    formDetailUser.reset();

    window.location.reload();
  }

}
