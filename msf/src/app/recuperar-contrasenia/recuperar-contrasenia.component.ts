import { Component } from '@angular/core';

@Component({
  selector: 'app-recuperar-contrasenia',
  templateUrl: './recuperar-contrasenia.component.html',
  styleUrl: './recuperar-contrasenia.component.scss'
})
export class RecuperarContraseniaComponent {
  email: string = '';

  recuperar() {
    if (this.email) {
      console.log('Solicitud de recuperación enviada a:', this.email);
    }
  }
}
