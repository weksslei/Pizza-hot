import { Offers } from './../../models/offers.model';
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-cards",
  templateUrl: "./cards.component.html",
  styleUrls:["./cards.components.css"]
})

export class CardsComponent {
  @Input() cards!: Offers[] | undefined;
}
