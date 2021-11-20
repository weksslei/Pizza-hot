import { CardsModule } from './../cards/cards.module';
import { OfertasComponent } from './../ofertas/ofertas.component';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [HomeComponent, OfertasComponent],
  imports: [
    CommonModule,
    CardsModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
