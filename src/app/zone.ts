import {Card}  from './card'
import {Player, nobody} from './player'

export class Zone extends Array<Card>{
    name: string;
    owner: Player;
}
