import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Education } from 'src/app/model/Education';

@Component({
  selector: 'app-delete-edu',
  templateUrl: './delete-edu.component.html',
  styleUrls: ['./delete-edu.component.css']
})
export class DeleteEduComponent implements OnInit {

  @Input() education!: Education;
  @Output() onDeleteEducation: EventEmitter<Education> = new EventEmitter();

  constructor(
    public modal:NgbModal,
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.onDeleteEducation.emit(this.education);

    //window.location.reload();
  }

}
