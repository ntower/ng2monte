export class Player {
    name: string;
    constructor(name:string) {
        this.name = name;
    }
}

export const nobody = new Player('nobody');