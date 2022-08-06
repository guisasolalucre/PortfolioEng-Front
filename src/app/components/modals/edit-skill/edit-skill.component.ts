import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { Skill } from 'src/app/model/Skill';
import { SkillService } from 'src/app/services/services-model/skill.service';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {

  @Input() skill!: Skill;
  listSkills: Skill[] = [];

  name:string ="";
  percent:number=0;
  subscription?: Subscription;

  constructor(
    public modal:NgbModal,
    private skillService: SkillService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(formDetailUser: NgForm){
    const id = this.skill.id;
    const name = this.name;
    const percent = this.percent;
    const edit = { id, name, percent };

    this.skillService.editSkill(edit).subscribe((data)=>(
      console.log(data)
    ));
    
    formDetailUser.reset();

    window.location.reload();
  }

}
