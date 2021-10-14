import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards.component';
import { NgModule } from "@angular/core";

@NgModule({
  declarations: [CardsComponent],
  imports: [CommonModule],
  exports: [CardsComponent]
})

export class CardsModule {}
