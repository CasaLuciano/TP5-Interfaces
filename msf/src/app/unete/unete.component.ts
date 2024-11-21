import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'; // Importar NgForm

@Component({
  selector: 'app-registro',
  templateUrl: './unete.component.html',
  styleUrls: ['./unete.component.scss']
})
export class UneteComponent {
  paso: number = 1;
  nombre: string = '';
  apellido: string = '';
  email: string = '';
  telefono: string = '';
  documento: string = '';
  fechaNacimiento: string = '';
  pais: string = '';  // Este es el valor seleccionado del país
  localidad: string = '';
  terminos: boolean = false;
  finalizado: boolean = false;

  listaPaises: string[] = [
    'Argentina', 'Brasil', 'Chile', 'Colombia', 'México', 'Perú', 'Uruguay' // Ejemplo de lista de países
  ];

  siguientePaso(form: NgForm) {
    if (form.valid) {
      if (this.paso < 3) {
        this.paso++;
      } else {
        this.finalizado = true; 
      }
    } else {
      this.marcarCamposTocados(form);
    }
  }

  marcarCamposTocados(form: NgForm): void {
    Object.keys(form.controls).forEach(field => {
      const control = form.controls[field];
      if (control) {
        control.markAsTouched();
        control.updateValueAndValidity();
      }
    });
  }

  finalizarRegistro() {
    console.log('Datos del registro:', {
      nombre: this.nombre,
      apellido: this.apellido,
      email: this.email,
      telefono: this.telefono,
      documento: this.documento,
      fechaNacimiento: this.fechaNacimiento,
      pais: this.pais,
      localidad: this.localidad,
      terminos: this.terminos,
    });
    alert('¡Registro completado con éxito!');
  }
}