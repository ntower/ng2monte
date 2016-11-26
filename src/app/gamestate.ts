import { Zone } from './zone'
import { Player, nobody } from './Player';

const sharedZones = [];
const personalZones = ['library', 'hand'];

export class Gamestate {
    players: Array<Player>;
    private zones: any = {};
    failedToDraw: number = 0;
    constructor() {
        this.players = [new Player('Player 1'), new Player('Player 2')];

        personalZones.forEach(zoneName => 
            this.players.forEach((player, index) => 
                this.createZone(this, zoneName, player)));

        sharedZones.forEach(zoneName => 
            this.createZone(this, zoneName));
    }
    private createZone(gamestate: Gamestate, zoneName: string, player: Player = nobody) {
        let z = new Zone();
        z.name = zoneName;
        z.owner = player;
        if (player === nobody) {
            gamestate.zones[zoneName] = z;
        } else {
            gamestate.zones[zoneName] = gamestate.zones[zoneName] || [];
            gamestate.zones[zoneName].push(z);
        }
    }
    getZone(name: string, player: number = 0) {
        let z = this.zones[name];
        if (z) {
            if (z instanceof Zone) {
                return z;
            } else {
                return z[player];
            }
        }
    }
}