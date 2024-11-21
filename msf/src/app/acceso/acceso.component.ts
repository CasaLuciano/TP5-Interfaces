import { Component } from '@angular/core';

@Component({
  selector: 'app-acceso',
  templateUrl: './acceso.component.html',
  styleUrl: './acceso.component.scss'
})
export class AccesoComponent {
  usuario: string = '';
  contrasena: string = '';
  errorUsuario: boolean = false;
  errorContrasena: boolean = false;
  recuperar: boolean = false;
  registrarse: boolean = false;

  login() {
    // Lógica para validar usuario y contraseña
    if (this.usuario !== 'usuarioValido') {
      this.errorUsuario = true;
    } else {
      this.errorUsuario = false;
    }

    if (this.contrasena !== 'contrasenaValida') {
      this.errorContrasena = true;
    } else {
      this.errorContrasena = false;
    }
  }

  mostrarRecuperacion() {
    this.recuperar = true;
    this.registrarse = false;
  }

  mostrarRegistro() {
    //this.registrar = true;
    this.recuperar = false;
  }
}
