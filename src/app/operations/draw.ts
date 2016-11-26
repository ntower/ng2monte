import { Gamestate } from '../gamestate';
import { Card } from '../card';

interface Options {
    quantity?: number;
    player?: number;
}

export function draw({quantity = 4, player = 0}:Options = {}) {
    return function (gamestate:Gamestate) {
        let library = gamestate.getZone('library', player);
        let hand = gamestate.getZone('library', player);
        for (let i = 0; i < quantity; i++) {
            const card = library.pop();
            if (card) {
                hand.push(card);
            } else {
                gamestate.failedToDraw += 1;
            }
        }
        return gamestate;
    }
}