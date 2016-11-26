import { Gamestate } from '../gamestate';
import { Card } from '../card';

interface Options {
    quantity?: number;
    cardName?: string;
    player?: number;
}

export function add({quantity = 4, cardName = 'unnamed', player = 0}:Options = {}) {
    return function (gamestate:Gamestate) {
        let zone = gamestate.getZone('library', player);
        for (let i = 0; i < quantity; i++) {
            zone.push(new Card(cardName));
        }
        return gamestate;
    }
}