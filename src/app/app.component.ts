import { Component } from '@angular/core';
import { Gamestate } from './gamestate';
import { add } from './operations/add';
import { draw } from './operations/draw';
import { shuffle } from './operations/shuffle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  gamestate: Gamestate;
  constructor() {
    this.gamestate = new Gamestate();
    console.log(this.gamestate);
    let actions = [
      add({quantity: 4, cardName: 'card a', player: 0}),
      add({quantity: 4, cardName: 'card b', player: 0}),
      shuffle({player: 0})
    ];

    this.gamestate = actions.reduce((a, b) => b(a), this.gamestate);
    console.log(this.gamestate);
  }
}
