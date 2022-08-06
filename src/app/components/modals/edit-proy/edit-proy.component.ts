import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { Proyect } from 'src/app/model/Proyect';
import { ProyectService } from 'src/app/services/services-model/proyect.service';

@Component({
  selector: 'app-edit-proy',
  templateUrl: './edit-proy.component.html',
  styleUrls: ['./edit-proy.component.css']
})
export class EditProyComponent implements OnInit {

  @Input() proyect!: Proyect;
  listProyects: Proyect[] = [];

  name:string ="";
  url:string="";
  description:string="";
  start:string="";
  finish:string="";
  subscription?: Subscription;

  constructor(
    public modal:NgbModal,
    private proyectService: ProyectService,
    private router: Router
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
    const edit = { id, name, url, description, start, finish };

    this.proyectService.editProyect(edit).subscribe((data)=>(
      console.log(data)
    ));
    
    formDetailUser.reset();

    window.location.reload();
  }

}
