import { Component } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss']
})
export class NosotrosComponent {
  contenidoSeleccionado: string = 'quienesSomos';

  mostrarContenido(caja: string): void {
    this.contenidoSeleccionado = caja;
  }
}