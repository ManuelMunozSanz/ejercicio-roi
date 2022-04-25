import { Alumno } from './../models/alumno.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  texto = "servicio";

  private _strengthPuntuation!: number;

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

  setAlumno(alumno: Alumno){
    localStorage.setItem(alumno._dni, JSON.stringify(alumno));

  }

  removeAlumno(dni : string){
    localStorage.removeItem(dni);
  }

  getAlumno(dni : string) : Alumno{
    return JSON.parse(localStorage.getItem(dni)!)
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



  set strengthPuntuation(num : number){
    this._strengthPuntuation = num;
  }

  get strengthPuntuation(): number {
    return this._strengthPuntuation;
  }

}
