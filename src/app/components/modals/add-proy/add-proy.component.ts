import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { Proyect } from 'src/app/model/Proyect';

@Component({
  selector: 'app-add-proy',
  templateUrl: './add-proy.component.html',
  styleUrls: ['./add-proy.component.css']
})
export class AddProyComponent implements OnInit {

  @Output() onAddProyect: EventEmitter<Proyect> = new EventEmitter();

  name:string ="";
  url:string="";
  description:string="";
  start:string="";
  finish:string="";
  subscription?: Subscription;

  constructor(
    public modal:NgbModal,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(formDetailUser: NgForm){
    const {name, url, description, start, finish} = this
    const newProyect = {name, url, description, start, finish}
    this.onAddProyect.emit(newProyect);
    formDetailUser.reset();
    //window.location.reload();
  }

}
