import { AlumnoService } from './../../../alumnos/services/alumno.service';
import { AbstractControl } from '@angular/forms';
import { Component, OnInit, Input, Output } from '@angular/core';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-strength-bar',
  templateUrl: './strength-bar.component.html',
  styleUrls: ['./strength-bar.component.scss']
})
export class StrengthBarComponent implements OnInit {

  @Input() controller: AbstractControl | null = null;

  @Output() _strengthPuntuation: number = 0;

  private readonly MESSAGE = {
    vacio: "",
    muyDebil : "Muy débil",
    debil: "Débil",
    moderada: "Moderada",
    fuerte: "Fuerte",
    muyFuerte: "Muy fuerte"

  }

  message = "";
  puntuation = 0;
  valor = "50"

  constructor(private alumnoService : AlumnoService) { }

  ngOnInit(): void {
    this.controller?.valueChanges.subscribe((password: string) => {
      if(!!password){
        this.checkStrength(password);
      }else{
        this._strengthPuntuation = 0;
      }

      if(this._strengthPuntuation === 0){
        this.puntuation = 0;
        this.message = this.MESSAGE.vacio;

      }else if(this._strengthPuntuation >= 1 && this._strengthPuntuation <= 2){
        this.puntuation = 1;
        this.message = this.MESSAGE.muyDebil;

      }else if(this._strengthPuntuation >= 3 && this._strengthPuntuation <= 4){
        this.puntuation = 2;
        this.message = this.MESSAGE.debil;

      }else if(this._strengthPuntuation >= 5 && this._strengthPuntuation <= 7){
        this.puntuation = 3;
        this.message = this.MESSAGE.moderada;

      }else if(this._strengthPuntuation >= 8 && this._strengthPuntuation <= 9){
        this.puntuation = 4;
        this.message = this.MESSAGE.fuerte;

      }else if(this._strengthPuntuation === 10){
        this.puntuation = 5;
        this.message = this.MESSAGE.muyFuerte;
      }

    });
  }

  checkStrength(password: string) {
    this._strengthPuntuation = 0;
    if (password.length >= 7 && password.length <= 8) {
      this._strengthPuntuation += 1;
    } else if (password.length >= 9 && password.length <= 12) {
      this._strengthPuntuation += 2;
    } else if (password.length > 12) {
      this._strengthPuntuation += 3;
    }

    let regExpDigits = /\d/;
    if (regExpDigits.test(password)) {
      this._strengthPuntuation += 1;
    }

    let regExpLetters = /[a-zA-Z]/g;
    if (regExpLetters.test(password)) {
      this._strengthPuntuation += 1;
    }

    let regExpUpLetter = /[A-Z]/g;
    if (regExpUpLetter.test(password)) {
      let regExpLowLetter = /[a-z]/g;
      if (regExpLowLetter.test(password)) {
        this._strengthPuntuation += 2;
      }
    }

    let regExpSimbol = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (regExpSimbol.test(password)) {
      this._strengthPuntuation += 2;
    }

    if (this._strengthPuntuation === 9) {
      this._strengthPuntuation = 10;
    }

    this.alumnoService.strengthPuntuation = this.strengthPuntuation;

  }

  get strengthPuntuation():number{
    return this._strengthPuntuation;
  }

}
