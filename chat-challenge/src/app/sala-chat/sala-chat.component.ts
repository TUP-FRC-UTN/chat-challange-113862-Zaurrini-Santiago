import { Component } from '@angular/core';
import { MensajeUsuarioComponent } from "../mensaje-usuario/mensaje-usuario.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sala-chat',
  standalone: true,
  imports: [MensajeUsuarioComponent, FormsModule],
  templateUrl: './sala-chat.component.html',
  styleUrl: './sala-chat.component.css'
})
export class SalaChatComponent {
  mensajes: string[] = [];

  agregarMensaje(data: { nombreUsuario: string, mensaje: string }) {
    const mensajeFormateado = `${data.nombreUsuario}: ${data.mensaje}  |`;
    this.mensajes.push(mensajeFormateado);
}
}
