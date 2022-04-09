export class Alumno {
  private _nombre: string;
  private _apellido1: string;

  private _apellido2?: string;
  private _email: string;
  private _dni: string;
  private _telefonoMovil: string;
  private _otroTelefono: string;
  private _pais: string;
  private _provincia: string;
  private _codigoPostal: string;
  private _localidad: string;
  private _nickname: string;
  private _contrasena: string;


  constructor(nombre: string, apellido1: string, apellido2: string, email: string, dni: string, telefonoMovil: string,
    otroTelefono: string, pais: string, provincia: string, codigoPostal: string, localidad: string,
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
