import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mensaje-usuario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './mensaje-usuario.component.html',
  styleUrl: './mensaje-usuario.component.css'
})
export class MensajeUsuarioComponent {
  @Input() nombreUsuario: string = '';

  mensaje: string = "";
  @Output() mensajeEnviado = new EventEmitter<{nombreUsuario: string, mensaje: string}>;

  enviarMensaje() {
    if (this.mensaje.trim()) {
      this.mensajeEnviado.emit({ nombreUsuario: this.nombreUsuario, mensaje: this.mensaje });
      this.mensaje = '';
    }
  }
}
