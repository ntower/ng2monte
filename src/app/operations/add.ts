import { Gamestate } from '../gamestate';
import { Card } from '../card';
import { Operation } from './operation';

interface Options {
    quantity?: number;
    cardName?: string;
    player?: number;
}

export class Add implements Operation {
    quantity: number;
    cardName: string;
    player: number;
    constructor ({quantity = 4, cardName = 'unnamed', player = 0}:Options = {}) {
        this.quantity = quantity;
        this.cardName = cardName;
        this.player = player;
    }
    execute(gamestate: Gamestate): Gamestate {
        let zone = gamestate.getZone('library', this.player);
        for (let i = 0; i < this.quantity; i++) {
            zone.push(new Card(this.cardName));
        }
        return gamestate;
    }
    shortDescription(): string {
        return 'Add cards';
    }
    longDescription(): string {
        return `Add ${this.quantity} copies of ${this.cardName} to player ${this.player}'s library`;
    }
}