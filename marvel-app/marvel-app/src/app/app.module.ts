import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CaractersListComponent } from './components/caracters-list/caracters-list.component';

import { TableModule } from 'primeng/table';
import { MarvelService } from './services/marvel.service';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CharacterDetailsDialogComponent } from './character-details-dialog/character-details-dialog.component';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CaractersListComponent,
    CharacterDetailsDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TableModule,
    HttpClientModule,
    ButtonModule,
    InputTextModule, 
    DialogModule
    

  ],
  providers: [
    provideClientHydration(),
    MarvelService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
