import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { Experience } from 'src/app/model/Experience';
import { ExperienceService } from 'src/app/services/services-model/experience.service';

@Component({
  selector: 'app-edit-exp',
  templateUrl: './edit-exp.component.html',
  styleUrls: ['./edit-exp.component.css']
})
export class EditExpComponent implements OnInit {

  @Input() experience!: Experience;
  listExperience: Experience[] = [];

  job:string ="";
  company:string="";
  ubication:string="";
  start:string="";
  finish:string="";
  description:string="";
  subscription?: Subscription;

  constructor(
    public modal:NgbModal,
    private experienceService: ExperienceService,
    private router: Router
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
    const editado = { id, job, company, ubication, start, finish, description };

    this.experienceService.editExperience(editado).subscribe((data)=>(
      console.log(data)
    ));
    
    formDetailUser.reset();

    window.location.reload();
  }

}
