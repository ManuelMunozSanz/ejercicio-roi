import { Alumno } from './../models/alumno.model';
import { Injectable } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { SpanishDniValidator } from '../validators/spanish.dni.validator';

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


  changePaisEvent(alumnoForm : FormGroup, pais:string){
    if (pais === "España") {
      alumnoForm.controls["telefonoMovil"].setValidators([Validators.pattern(/^(0034|\+34|34)?(6\d{2}|7\d{2}|9[1-9]\d{1})\d{6}$/)] );
      alumnoForm.controls["telefonoMovil"].updateValueAndValidity();
      alumnoForm.controls["telefonoMovil"].updateValueAndValidity();

      alumnoForm.controls['dni'].addValidators(SpanishDniValidator.isValidDni());
      alumnoForm.controls["dni"].updateValueAndValidity();


    }else{
      alumnoForm.controls["telefonoMovil"].clearValidators;
      alumnoForm.controls["telefonoMovil"].setValidators([Validators.required]);
      alumnoForm.controls["telefonoMovil"].updateValueAndValidity();

      alumnoForm.controls["dni"].clearValidators;
      alumnoForm.controls["dni"].setValidators([Validators.required]);
      alumnoForm.controls["dni"].updateValueAndValidity();
    }
  }

  set strengthPuntuation(num : number){
    this._strengthPuntuation = num;
  }

  get strengthPuntuation(): number {
    return this._strengthPuntuation;
  }

}
