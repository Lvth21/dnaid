export class Tstato {
    idStato!: number;
    descrizione!: string;
    nome!: string;

    constructor(args: Tstato) {
        Object.assign(this, args);
      }
}
