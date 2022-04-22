import { AlumnoService } from './../../services/alumno.service';
import { Component, OnInit } from '@angular/core';
import { Alumno } from '../../models/alumno.model';
import { MatTableDataSource } from '@angular/material/table';
import { filter } from 'rxjs';


@Component({
  selector: 'app-alumno-list',
  templateUrl: './alumno-list.component.html',
  styleUrls: ['./alumno-list.component.scss']
})
export class AlumnoListComponent implements OnInit {

  alumnosList: Alumno[] = [];
  alumnosListFilter: Alumno[] = [];

  constructor(private alumnoService: AlumnoService) { }

  ngOnInit(): void {
    this.alumnosList = this.alumnoService.getAllAlumnos();
    this.alumnosListFilter = [...this.alumnosList];
  }

  removeAlumno(dni: string) {
    this.alumnoService.removeAlumno(dni);

    for (let i = 0; i < this.alumnosList.length; i++) {
      if (this.alumnosList[i]._dni === dni) {
        this.alumnosList.splice(i, 1);
        this.alumnosListFilter.splice(i,1);
      }
    }
}

applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();

  this.alumnosListFilter = this.alumnosList.filter(alumno => {
    if (!!alumno._nombre && alumno._nombre.toLowerCase().indexOf(filterValue) != -1) {
      return true;
    } else if (!!alumno._apellido1 && alumno._apellido1.toLowerCase().indexOf(filterValue) != -1) {
      return true;
    } else if (!!alumno._apellido2 && alumno._apellido2.toLowerCase().indexOf(filterValue) != -1) {
      return true;
    } else if (!!alumno._dni && alumno._dni.toLowerCase().indexOf(filterValue) != -1) {
      return true;
    } else if (!!alumno._email && alumno._email.toLowerCase().indexOf(filterValue) != -1) {
      return true;
    }
    return false;
  })
}

}
