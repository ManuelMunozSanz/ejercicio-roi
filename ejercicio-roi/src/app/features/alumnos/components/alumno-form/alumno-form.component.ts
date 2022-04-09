import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-alumno-form',
  templateUrl: './alumno-form.component.html',
  styleUrls: ['./alumno-form.component.scss'],
})
export class AlumnoFormComponent implements OnInit {

  alumnoForm: FormGroup;


  constructor() {
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
      telefonoMovil: new FormControl(null, [Validators.required]),
      otroTelefono: new FormControl(null),
      pais: new FormControl(null),
      provincia: new FormControl(null, [Validators.required]),
      codigoPostal: new FormControl(null, [Validators.required]),
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
  }



  onSubmit(){
    let nombre = this.alumnoForm.value.nombre;
    console.log(nombre);
  }

}
