export class RuoloProgram {
    idRuolo!: number;
    descrizione!: string;
    nome!: string;

    constructor(args: RuoloProgram) {
        Object.assign(this, args);
      }
}
