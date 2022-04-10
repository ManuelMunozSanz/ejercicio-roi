import { Alumno } from './../models/alumno.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  texto = "servicio";

  constructor() { }

  addAlumno(alumno: Alumno): boolean {

    let dniAlumno = localStorage.getItem(alumno._dni);

    if (!!dniAlumno) {
      return false;

    } else {
      localStorage.setItem(alumno._dni, JSON.stringify(alumno));
    }
    return true;
  }

  getAllAlumnos(): Alumno[] {
    let allAlumnos: Alumno[] = [],
      keys = Object.keys(localStorage),
      arrayAlumnosLength = keys.length;

    for (let i = 0; i < arrayAlumnosLength; i++) {
      let item = localStorage.getItem(keys[i]);

      let alumno = JSON.parse(item!);

      allAlumnos.push(alumno);
    }
    return allAlumnos;
  }
}
