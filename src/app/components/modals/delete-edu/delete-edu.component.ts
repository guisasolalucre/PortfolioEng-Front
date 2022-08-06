import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Education } from 'src/app/model/Education';
import { EducationService } from 'src/app/services/services-model/education.service';

@Component({
  selector: 'app-delete-edu',
  templateUrl: './delete-edu.component.html',
  styleUrls: ['./delete-edu.component.css']
})
export class DeleteEduComponent implements OnInit {

  @Input() education!: Education;

  constructor(
    public modal:NgbModal,
    public educationService: EducationService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.educationService.deleteEducation(this.education).subscribe((data)=>(
      console.log("deleted")
    ));

    window.location.reload();
  }

}
