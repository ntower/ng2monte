import { Gamestate } from '../gamestate';
import { Card } from '../card';
import { Operation } from './operation';

interface Options {
    player?: number;
}

export class Shuffle implements Operation {
	player: number;
	constructor({player = 0}:Options) {

	}
    execute(gamestate: Gamestate): Gamestate {
		let library = gamestate.getZone('library', this.player);
		fisherYatesShuffle(library);
        return gamestate;
    }
	shortDescription(): string {
		return 'Shuffle';
	}
	longDescription(): string {
		return `Player ${this.player} shuffles their library`;
	}
}

function fisherYatesShuffle(deck:Array<any>) {
	const length = deck.length;
	for (let i = length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		swap(deck, i, j);
	}
    
	return deck;
}

function swap(arr:Array<any>, indexA:number, indexB:number) {
	[arr[indexA], arr[indexB]] = [arr[indexB], arr[indexA]];
}