import { Component, Input } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() value: number;
  @Input() suit: number;

  constructor() {
    if (!this.value) {
      this.value = 5;
    }
    if (!this.suit) {
      this.suit = 1;
    }
  }
}
