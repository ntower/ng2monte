import { Component } from '@angular/core';
import { Gamestate } from './gamestate';
import { Add } from './operations/add';
import { Draw } from './operations/draw';
import { Shuffle } from './operations/shuffle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  gamestate: Gamestate;
  setup: Array<Function> = [];
  test: Array<Function> = [];
  constructor() {
    this.gamestate = new Gamestate();
    console.log(this.gamestate);
    let actions = [
      new Add({quantity: 4, cardName: 'card a', player: 0}),
      new Add({quantity: 4, cardName: 'card b', player: 0}),
      new Shuffle({player: 0})
    ];

    this.gamestate = actions.reduce((gamestate, action) => action.execute(gamestate), this.gamestate);
    console.log(this.gamestate);
  }
  addStep(type) {
    console.log('add a step!', type);
  }
}
