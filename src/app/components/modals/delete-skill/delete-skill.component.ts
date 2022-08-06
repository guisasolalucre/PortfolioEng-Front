import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Skill } from 'src/app/model/Skill';
import { SkillService } from 'src/app/services/services-model/skill.service';

@Component({
  selector: 'app-delete-skill',
  templateUrl: './delete-skill.component.html',
  styleUrls: ['./delete-skill.component.css']
})
export class DeleteSkillComponent implements OnInit {

  @Input() skill!: Skill

  constructor(public modal:NgbModal,
              public skillService: SkillService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.skillService.deleteSkill(this.skill).subscribe((data)=>(
      console.log("deleted")
    ));

    window.location.reload();
  }

}
