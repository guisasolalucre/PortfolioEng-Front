import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Output() onDeleteExperience: EventEmitter<Experience> = new EventEmitter();

  constructor(public modal:NgbModal,
              public experienceService: ExperienceService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.onDeleteExperience.emit(this.experience);

    //window.location.reload();
  }

}
