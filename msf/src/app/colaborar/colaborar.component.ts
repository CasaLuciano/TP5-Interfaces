import { Component } from '@angular/core';

@Component({
  selector: 'app-colaborar',
  templateUrl: './colaborar.component.html',
  styleUrl: './colaborar.component.scss'
})
export class ColaborarComponent {

  metodoSeleccionado: string = '';
  monto: number | null = null;
  mostrarImagenAgradecimiento: boolean = false;

  mostrarCamposPago() {
    this.mostrarImagenAgradecimiento = false;
  }

  realizarColaboracion() {
    if (this.monto && this.metodoSeleccionado) {
      this.mostrarImagenAgradecimiento = true;
      // Limpiar campos después de la colaboración
      this.metodoSeleccionado = '';
      this.monto = null;
    } else {
      alert('Por favor, seleccione un método de pago y un monto válido.');
    }
  }
}


