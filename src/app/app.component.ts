import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SanValentin';
  stickerImage: string = 'assets/sticker.gif'; // Imagen predeterminada
  questionText: string = '¿Quieres ser mi San Valentín?'; // Texto predeterminado
  showButtons: boolean = true; // Mostrar u ocultar botones
  newSong: string = 'assets/Si.mp3'; // Nueva canción
  rejectionSong: string = 'assets/No.mp3'; // Nueva canción para rechazar
  currentRejectionIndex: number = 0; // Índice para las respuestas de rechazo
  hasChangedSong: boolean = false; // Bandera para controlar si la música ya cambió

  // Lista de GIFs para el carrusel
  acceptanceGifs: string[] = [
    'assets/happy6.gif',
    'assets/happy1.gif',
    'assets/Amor.gif',
    'assets/happy3.gif',
    'assets/happy7.gif',
    'assets/happy4.gif',
    'assets/happy5.gif',
    'assets/happy8.gif',
    'assets/happy9.gif',
    'assets/happy10.gif',
    'assets/happy11.gif',
    'assets/happy12.gif',
    'assets/happy13.gif',
    'assets/happy14.gif',
    'assets/happy15.gif',
    'assets/happy16.gif',
    'assets/happy17.gif',
    'assets/happy18.gif',
    'assets/happy19.gif',
    'assets/happy20.gif'
  ];
  currentAcceptanceIndex: number = 0; // Índice para el carrusel de aceptación
  acceptanceInterval: any; // Intervalo para el carrusel

  // Lista de respuestas de rechazo (GIFs y textos)
  rejectionResponses = [
    { gif: 'assets/sad1.gif', text: '¡Que! ¿En serio?' },
    { gif: 'assets/sad2.gif', text: '¡Piénsalo bien!' },
    { gif: 'assets/sad4.gif', text: '¡Dame tiempo y te dare el universo entero!' },
    { gif: 'assets/sad5.gif', text: '¡Di que si y como Sam te acompañare fielmente!' },
    { gif: 'assets/sad6.gif', text: '¿Estás segura? Mira esto' },
    { gif: 'assets/sad8.gif', text: '¡Que! ¿Ni con el baile?' },
    { gif: 'assets/sad14.gif', text: '¡Quien me llenara de energia al final del dia!' },
    { gif: 'assets/sad9.gif', text: '¡Puedo ver que quieres darme el si!' },
    { gif: 'assets/sad7.gif', text: '¡Vamos, otra oportunidad!' },
    { gif: 'assets/sad12.gif', text: 'Quiero ser tu ¡Yo te elijo!' },
    { gif: 'assets/sad11.gif', text: '¿Última oportunidad?' }
  ];

  onAccepted() {
    this.stickerImage = this.acceptanceGifs[this.currentAcceptanceIndex]; // Mostrar el primer GIF
    this.questionText = '¡Sabia que aceptarias! 💖'; // Cambiar texto
    this.showButtons = false; // Ocultar botones
    this.changeSong(this.newSong); // Cambiar canción

    // Iniciar el carrusel de GIFs
    this.startAcceptanceCarousel();
  }

  onRejected() {
    // Obtener la respuesta actual
    const response = this.rejectionResponses[this.currentRejectionIndex];
    this.stickerImage = response.gif; // Cambiar GIF
    this.questionText = response.text; // Cambiar texto

    // Cambiar la música solo la primera vez
    if (!this.hasChangedSong) {
      this.changeSong(this.rejectionSong);
      this.hasChangedSong = true; // Marcar que la música ya cambió
    }

    // Avanzar al siguiente índice (ciclo)
    this.currentRejectionIndex = (this.currentRejectionIndex + 1) % this.rejectionResponses.length;
  }

  startAcceptanceCarousel() {
    this.acceptanceInterval = setInterval(() => {
      this.currentAcceptanceIndex = (this.currentAcceptanceIndex + 1) % this.acceptanceGifs.length;
      this.stickerImage = this.acceptanceGifs[this.currentAcceptanceIndex]; // Cambiar GIF
    }, 7000); // Cambiar cada 3 segundos
  }

  changeSong(song: string) {
    const audio = document.querySelector('audio') as HTMLAudioElement;
    if (audio) {
      audio.src = song;
      audio.play();
      audio.volume = 0.3; // Ajustar volumen
      audio.loop = true; // Reproducir en bucle
    }
  }
}
