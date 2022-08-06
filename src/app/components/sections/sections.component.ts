import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/model/Education';
import { Experience } from 'src/app/model/Experience';
import { Skill } from 'src/app/model/Skill';
import { Person } from 'src/app/model/Person';
import { Proyect } from 'src/app/model/Proyect';
import { PersonService } from 'src/app/services/services-model/person.service';
import { EducationService } from 'src/app/services/services-model/education.service';
import { ExperienceService } from 'src/app/services/services-model/experience.service';
import { SkillService } from 'src/app/services/services-model/skill.service';
import { ProyectService } from 'src/app/services/services-model/proyect.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})

export class SectionsComponent implements OnInit {

  // para que empiece mostrando acerca de
  id:String = "about";

  person: Person = new Person();

  logged: boolean = false;

  listEducation: Education[] = [];
  listExperience: Experience[] = [];
  listSkills: Skill[] = [];
  listProyects: Proyect[] = [];

  constructor(private personService:PersonService,
              private educationService: EducationService,
              private experienceService: ExperienceService,
              private skillService: SkillService,
              private proyectService: ProyectService,
              private uiService : UiService) { }

  ngOnInit(): void {

    this.logged = this.uiService.canEdit();
    // console.log("sections log: " + this.logged)

    this.personService.getData().subscribe(data => {
      this.person = data;
    });
    this.educationService.listEducation().subscribe(data => {
      this.listEducation = data;
    });
    this.experienceService.listExperience().subscribe(data => {
      this.listExperience = data;
    });
    this.skillService.listSkills().subscribe(data => {
      this.listSkills = data;
    });
    this.proyectService.listProyects().subscribe(data => {
      this.listProyects = data;
    }); 
  }


  // tabs
  change(ids:String){
    this.id = ids;
  }

  
  // education
  newEducation(edu: Education){
    this.educationService.newEducation(edu).subscribe((data)=>(
      this.listEducation.push(data)
    ));
  }

  editEducacion(edu: Education){
    this.educationService.editEducation(edu).subscribe((data)=>(
      this.listEducation.push(data)
    ));
  }

  deleteEducation(edu: Education){
    this.educationService.deleteEducation(edu).subscribe(()=>(
      console.log("deleted")
    ));
  }

  // experience
  newExperience(exp: Experience){
    this.experienceService.newExperience(exp).subscribe((data)=>(
      this.listExperience.push(data)
    ));
  }

  editExperience(exp: Experience){
    this.experienceService.editExperience(exp).subscribe((data)=>(
      this.listExperience.push(data)
    ));
  }

  deleteExperience(exp: Experience){
    this.experienceService.deleteExperience(exp).subscribe(()=>(
      console.log("deleted")
    ))
  }

  // skill
  newSkill(skill: Skill){
    this.skillService.newSkill(skill).subscribe((data)=>(
      this.listSkills.push(data)
    ));
  }

  editSkill(skill: Skill){
    this.skillService.editSkill(skill).subscribe((data)=>(
      this.listSkills.push(data)
    ));
  }

  deleteSkill(skill: Skill){
    this.skillService.deleteSkill(skill).subscribe(()=>(
      console.log("deleted")
    ))
  }

  // proyect
  newProyect(proy: Proyect){
    this.proyectService.newProyect(proy).subscribe((data)=>(
      this.listProyects.push(data)
    ));
  }

  editProyect(proy: Proyect){
    this.proyectService.editProyect(proy).subscribe((data)=>(
      this.listProyects.push(data)
    ));
  }

  deleteProyect(proy: Proyect){
    this.proyectService.deleteProyect(proy).subscribe(()=>(
      console.log("deleted")
    ))
  }

}
