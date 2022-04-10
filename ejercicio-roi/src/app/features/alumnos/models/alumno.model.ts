export class Alumno {

   _nombre: string;
   _apellido1: string;
   _apellido2: string;
   _email: string;
   _dni: string;
   _telefonoMovil: number;
   _otroTelefono: number;
   _pais: string;
   _provincia: string;
   _codigoPostal: number;
   _localidad: string;
   _nickname: string;
   _contrasena: string;

  constructor(nombre: string, apellido1: string, apellido2: string, email: string, dni: string, telefonoMovil: number,
    otroTelefono: number, pais: string, provincia: string, codigoPostal: number, localidad: string,
    nickname: string, contrasena: string,) {

    this._nombre = nombre;
    this._apellido1 = apellido1;
    this._apellido2 = apellido2;
    this._email = email;
    this._dni = dni;
    this._telefonoMovil = telefonoMovil;
    this._otroTelefono = otroTelefono;
    this._pais = pais;
    this._provincia = provincia;
    this._codigoPostal = codigoPostal;
    this._localidad = localidad;
    this._nickname = nickname;
    this._contrasena = contrasena;

  }


}
