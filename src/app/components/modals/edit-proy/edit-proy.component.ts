import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { Proyect } from 'src/app/model/Proyect';

@Component({
  selector: 'app-edit-proy',
  templateUrl: './edit-proy.component.html',
  styleUrls: ['./edit-proy.component.css']
})
export class EditProyComponent implements OnInit {

  @Input() proyect!: Proyect;
  @Output() onEditProyect: EventEmitter<Proyect> = new EventEmitter();

  name:string ="";
  url:string="";
  description:string="";
  start:string="";
  finish:string="";
  subscription?: Subscription;

  constructor(
    public modal:NgbModal
  ) { }

  ngOnInit(): void {
  }

  onSubmit(formDetailUser: NgForm){
    const id = this.proyect.id;
    const name = this.name;
    const url = this.url;
    const description = this.description;
    const start = this.start;
    const finish = this.finish;
    const editProy = { id, name, url, description, start, finish };

    this.onEditProyect.emit(editProy)
    
    formDetailUser.reset();

    //window.location.reload();
  }

}
