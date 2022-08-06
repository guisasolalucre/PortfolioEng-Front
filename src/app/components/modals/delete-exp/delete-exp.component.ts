import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Experience } from 'src/app/model/Experience';
import { ExperienceService } from 'src/app/services/services-model/experience.service';

@Component({
  selector: 'app-delete-exp',
  templateUrl: './delete-exp.component.html',
  styleUrls: ['./delete-exp.component.css']
})
export class DeleteExpComponent implements OnInit {

  @Input() experience!: Experience

  constructor(public modal:NgbModal,
              public experienceService: ExperienceService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.experienceService.deleteExperience(this.experience).subscribe((data)=>(
      console.log("deleted")
    ));

    window.location.reload();
  }

}
