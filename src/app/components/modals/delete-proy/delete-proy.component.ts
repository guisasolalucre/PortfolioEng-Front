import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Proyect } from 'src/app/model/Proyect';
import { ProyectService } from 'src/app/services/services-model/proyect.service';

@Component({
  selector: 'app-delete-proy',
  templateUrl: './delete-proy.component.html',
  styleUrls: ['./delete-proy.component.css']
})
export class DeleteProyComponent implements OnInit {

  @Input() proyect!: Proyect

  constructor(public modal:NgbModal,
              public proyectService: ProyectService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.proyectService.deleteProyect(this.proyect).subscribe((data)=>(
      console.log("deleted")
    ));

    window.location.reload();
  }

}
