import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Skill } from 'src/app/model/Skill';

@Component({
  selector: 'app-delete-skill',
  templateUrl: './delete-skill.component.html',
  styleUrls: ['./delete-skill.component.css']
})
export class DeleteSkillComponent implements OnInit {

  @Input() skill!: Skill
  @Output() onDeleteSkill: EventEmitter<Skill> = new EventEmitter();

  constructor(public modal:NgbModal) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.onDeleteSkill.emit(this.skill);

    //window.location.reload();
  }

}
