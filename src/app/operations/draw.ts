import { Gamestate } from '../gamestate';
import { Card } from '../card';
import { Operation } from './operation';

interface Options {
    quantity?: number;
    player?: number;
}

export class Draw implements Operation {
    quantity: number;
    player: number;
    constructor({quantity = 4, player = 0}:Options = {}) {
        this.quantity = quantity;
        this.player = player;
    }
    execute(gamestate: Gamestate): Gamestate {
        let library = gamestate.getZone('library', this.player);
        let hand = gamestate.getZone('library', this.player);
        for (let i = 0; i < this.quantity; i++) {
            const card = library.pop();
            if (card) {
                hand.push(card);
            } else {
                gamestate.failedToDraw += 1;
            }
        }
        return gamestate;
    }
    shortDescription(): string {
        return 'Draw cards';
    }
    longDescription(): string {
        return `Player ${this.player} draws ${this.quantity} cards`;
    }
}