import { Gamestate } from '../gamestate';
import { Card } from '../card';

interface Options {
    player?: number;
}

export function Shuffle({player = 0}:Options) {
    return function (gamestate:Gamestate) {
		let library = gamestate.getZone('library', player);
		let newOrder = fisherYatesShuffle(library);
		library.splice(0, library.length - 1, ...newOrder);
        return gamestate;
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