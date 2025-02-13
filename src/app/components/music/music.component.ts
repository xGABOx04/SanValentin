import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-music',
  standalone: false,
  
  templateUrl: './music.component.html',
  styleUrl: './music.component.css'
})
export class MusicComponent implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const audio = document.querySelector('audio') as HTMLAudioElement;
      if (audio) {
        audio.volume = 0.3; // Ajusta el volumen (0.5 es 50% del volumen máximo).
      }
    }
  }
}