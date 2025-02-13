import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sticker',
  standalone: false,
  
  templateUrl: './sticker.component.html',
  styleUrl: './sticker.component.css'
})
export class StickerComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
  @Input() imageUrl: string = 'assets/sticker.gif'; // Imagen predeterminada
}
