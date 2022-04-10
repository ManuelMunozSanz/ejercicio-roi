import { AlumnoService } from './../../services/alumno.service';
import { Component, OnInit } from '@angular/core';
import { Alumno } from '../../models/alumno.model';

@Component({
  selector: 'app-alumno-list',
  templateUrl: './alumno-list.component.html',
  styleUrls: ['./alumno-list.component.scss']
})
export class AlumnoListComponent implements OnInit {

  alumnosList : Alumno[] = [];

  constructor(private alumnoService : AlumnoService) { }

  ngOnInit(): void {
    this.alumnosList = this.alumnoService.getAllAlumnos();
    let al : Alumno = <Alumno>this.alumnosList[0];

  }

}
