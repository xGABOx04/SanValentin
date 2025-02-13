import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-buttons',
  standalone: false,
  
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.css'
})

export class ButtonsComponent {
  siImage: string = 'assets/Carta.png'; // Imagen predeterminada para "Sí"
  noImage: string = 'assets/Boton.png'; // Imagen predeterminada para "No"

  changeImage(button: string, isHover: boolean) {
    if (button === 'si') {
      this.siImage = isHover ? 'assets/Si.png' : 'assets/Carta.png';
    } else if (button === 'no') {
      this.noImage = isHover ? 'assets/No.png' : 'assets/Boton.png';
    }
  }

  @Output() accepted = new EventEmitter<void>();
  @Output() rejected = new EventEmitter<void>();

  accept() {
    this.accepted.emit(); // Emitir evento cuando se hace clic en "Sí"
  }

  deny() {
    this.rejected.emit(); // Emitir evento cuando se hace clic en "No"
  }
}
