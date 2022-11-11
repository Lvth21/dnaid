import { ResourceLoader } from "@angular/compiler";

export class RuoloProgram {
    idRuolo!: number;
    descrizione!: string;
    nome!: string;
    image!:string;

    constructor(args: RuoloProgram) {
        Object.assign(this, args);
      }
}
