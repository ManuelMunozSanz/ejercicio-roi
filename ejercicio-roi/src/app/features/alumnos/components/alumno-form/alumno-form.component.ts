import { Alumno } from './../../models/alumno.model';
import { AlumnoService } from './../../services/alumno.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ArraysPaises } from '../../data/arraysPaises';
import { Router } from '@angular/router';
import { SHA256, enc } from "crypto-js";


@Component({
  selector: 'app-alumno-form',
  templateUrl: './alumno-form.component.html',
  styleUrls: ['./alumno-form.component.scss'],
})
export class AlumnoFormComponent implements OnInit {

  alumnoForm: FormGroup;

  paises = ArraysPaises.paises;
  provincias = ArraysPaises.provincias;
  hidePass = true;

  passStrength!: number;


  constructor(
    public alumnoService: AlumnoService,
    private router: Router
  ) {
    this.alumnoForm = new FormGroup({
      nombre: new FormControl(null, [Validators.required]),
      apellido1: new FormControl(null, [Validators.required]),
      apellido2: new FormControl(null),
      email: new FormControl(
        null,
        [
          Validators.required,
          Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
        ]
      ),
      dni: new FormControl(null,
        [
          Validators.required,
          Validators.pattern("^[0-9]{8}[a-zA-Z]{1}$")
        ]
      ),
      telefonoMovil: new FormControl(null,
        [
          Validators.required,
          Validators.pattern("[0-9]{9}")
        ]
      ),
      otroTelefono: new FormControl(null),
      pais: new FormControl(null, [Validators.required]),
      provincia: new FormControl(null, [Validators.required]),
      codigoPostal: new FormControl(null,
        [
          Validators.required,
          Validators.pattern("[0-9]{5}")
        ]
      ),
      localidad: new FormControl(null, [Validators.required]),
      nickname: new FormControl(null, [Validators.required]),
      contrasena: new FormControl(null,
        [
          Validators.required,
          Validators.minLength(6)
        ]
      ),
    });
  }

  ngOnInit(): void {
    let alumnoPrueba: Alumno = new Alumno("Manu", "Muñoz", "Sanz", "manu@hm.com", "54679879s", 685798547, 321546987, "España", "Asturias", 28954, "SsReyes", "Manolito", "contraseña");
    let alumnoPrueba2: Alumno = new Alumno("Diego", "Astiz", "Ameztoy", "manu@hm.com", "00000000s", 685798547, 321546987, "España", "Asturias", 28954, "SsReyes", "Manolito", "contraseña");
    let alumnoPrueba3: Alumno = new Alumno("Jorge", "Andrés", "Rodriguez", "manu@hm.com", "11111111s", 685798547, 321546987, "España", "Asturias", 28954, "SsReyes", "Manolito", "contraseña");
    localStorage.setItem(alumnoPrueba._dni, JSON.stringify(alumnoPrueba));
    localStorage.setItem(alumnoPrueba2._dni, JSON.stringify(alumnoPrueba2));
    localStorage.setItem(alumnoPrueba3._dni, JSON.stringify(alumnoPrueba3));


  }

  onSubmit() {

    let alumno: Alumno = new Alumno(
      this.alumnoForm.value.nombre,
      this.alumnoForm.value.apellido1,
      this.alumnoForm.value.apellido2,
      this.alumnoForm.value.email,
      this.alumnoForm.value.dni,
      this.alumnoForm.value.telefonoMovil,
      this.alumnoForm.value.otroTelefono,
      this.alumnoForm.value.pais,
      this.alumnoForm.value.provincia,
      this.alumnoForm.value.codigoPostal,
      this.alumnoForm.value.localidad,
      this.alumnoForm.value.nickname,
      SHA256(this.alumnoForm.value.contraena).toString(enc.Hex),

    );


    if (this.alumnoService.strengthPuntuation < 8 && confirm("La contraseña es inferior a 8 puntos, ¿Quieres manternerla?")
      || this.alumnoService.strengthPuntuation >= 8) {

      if (this.alumnoService.addAlumno(alumno)) {
        this.alumnoForm.reset();
        this.router.navigate(['/list']);

      } else {
        alert("Ya existe ese usuario");
      }
    }


  }



}
