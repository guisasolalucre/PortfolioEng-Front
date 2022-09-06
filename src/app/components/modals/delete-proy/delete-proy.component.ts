import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Proyect } from 'src/app/model/Proyect';

@Component({
  selector: 'app-delete-proy',
  templateUrl: './delete-proy.component.html',
  styleUrls: ['./delete-proy.component.css']
})
export class DeleteProyComponent implements OnInit {

  @Input() proyect!: Proyect
  @Output() onDeleteProyect: EventEmitter<Proyect> = new EventEmitter();

  constructor(public modal:NgbModal) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.onDeleteProyect.emit(this.proyect);

    window.location.reload();
  }

}
