import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ArraysPaises } from '../../data/arraysPaises';
import { Alumno } from '../../models/alumno.model';
import { AlumnoService } from '../../services/alumno.service';
import { SHA256, enc } from "crypto-js";


@Component({
  selector: 'app-alumno-edit',
  templateUrl: './alumno-edit.component.html',
  styleUrls: ['./alumno-edit.component.scss']
})
export class AlumnoEditComponent implements OnInit {

  alumnoEdit: FormGroup;

  paises = ArraysPaises.paises;
  provincias = ArraysPaises.provincias;

  hidePass = true;

  dniParam: string = ""
  newPass: boolean = false;
  private _passwordAlumno: string = "";

  constructor(
    public alumnoService: AlumnoService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.dniParam = route.snapshot.params['id'];
    let alumnoEdit = alumnoService.getAlumno(this.dniParam);

    this._passwordAlumno = alumnoEdit._contrasena;


    this.alumnoEdit = new FormGroup({
      nombre: new FormControl(alumnoEdit._nombre, [Validators.required]),
      apellido1: new FormControl(alumnoEdit._apellido1, [Validators.required]),
      apellido2: new FormControl(alumnoEdit._apellido2),
      email: new FormControl(
        alumnoEdit._email,
        [
          Validators.required,
          Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
        ]
      ),
      dni: new FormControl(alumnoEdit._dni,
        [
          Validators.required,
        ],
      ),
      telefonoMovil: new FormControl(alumnoEdit._telefonoMovil,
        [
          Validators.required,
          Validators.pattern("[0-9]{9}")
        ]
      ),
      otroTelefono: new FormControl(alumnoEdit._otroTelefono),
      pais: new FormControl(alumnoEdit._pais, [Validators.required]),
      provincia: new FormControl(alumnoEdit._provincia, [Validators.required]),
      codigoPostal: new FormControl(alumnoEdit._codigoPostal,
        [
          Validators.required,
          Validators.pattern("[0-9]{5}")
        ]
      ),
      localidad: new FormControl(alumnoEdit._localidad, [Validators.required]),
      nickname: new FormControl(alumnoEdit._nickname, [Validators.required]),
      contrasena: new FormControl({ value: '', disabled: true },
        [
          Validators.required,
          Validators.minLength(6)
        ]
      ),
    });

  }

  ngOnInit(): void {
  }

  enablePass() {
    if (!this.newPass) {
      this.alumnoEdit.get("contrasena")?.enable();
      this.newPass = true;
    } else {
      this.alumnoEdit.get("contrasena")?.disable();
      this.newPass = false;
    }
  }

  changePaisEvent(pais: string) {
    this.alumnoService.changePaisEvent(this.alumnoEdit, pais);
  }

  onSubmit() {
    let updatedPass = "";
    if (this.newPass) {
      updatedPass = SHA256(this.alumnoEdit.value.contrasena).toString(enc.Hex);
    } else {
      updatedPass = this._passwordAlumno;
    }

    let alumno: Alumno = new Alumno(
      this.alumnoEdit.value.nombre,
      this.alumnoEdit.value.apellido1,
      this.alumnoEdit.value.apellido2,
      this.alumnoEdit.value.email,
      this.dniParam,
      this.alumnoEdit.value.telefonoMovil,
      this.alumnoEdit.value.otroTelefono,
      this.alumnoEdit.value.pais,
      this.alumnoEdit.value.provincia,
      this.alumnoEdit.value.codigoPostal,
      this.alumnoEdit.value.localidad,
      this.alumnoEdit.value.nickname,
      updatedPass,
    );

    if (!this.newPass || this.alumnoService.strengthPuntuation < 8 && confirm("La contraseña es inferior a 8 puntos, ¿Quieres manternerla?")
      || this.alumnoService.strengthPuntuation >= 8) {

      this.alumnoService.setAlumno(alumno);
      this.alumnoEdit.reset();
      this.router.navigate(['/list']);
    }


  }

}
