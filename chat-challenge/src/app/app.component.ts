import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MensajeUsuarioComponent } from "./mensaje-usuario/mensaje-usuario.component";
import { SalaChatComponent } from "./sala-chat/sala-chat.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MensajeUsuarioComponent, SalaChatComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'chat-challenge';
}
