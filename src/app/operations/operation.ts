import { Gamestate } from '../gamestate';

export interface Operation {
    execute: (gamestate: Gamestate) => Gamestate
    shortDescription: () => string;
    longDescription: () => string;
}