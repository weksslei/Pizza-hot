import { OfertasComponent } from './../ofertas/ofertas.component';
import { NavigationModule } from './../../shared/components/navigation/navigation.module';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [HomeComponent, OfertasComponent],
  imports: [
    CommonModule,
    NavigationModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
