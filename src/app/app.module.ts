import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoBackgroundComponent } from './components/video-background/video-background.component';
import { StickerComponent } from './components/sticker/sticker.component';
import { QuestionComponent } from './components/question/question.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { MusicComponent } from './components/music/music.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoBackgroundComponent,
    StickerComponent,
    QuestionComponent,
    ButtonsComponent,
    MusicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
