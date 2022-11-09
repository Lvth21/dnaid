import { RuoloProgram } from "./ruolo-program";
import { Tstato } from "./tstato";
import { Type } from 'class-transformer';

export class Cliente {
    matricola!: number;
	cartaIdentita!: string;
	codiceFiscale!: string;
	cognome!: string;
	dataAssunzione!: Date;
	dataDiNascita!: Date;
	luogoDiNascita!: string;
	nome!: string;
	@Type(() => RuoloProgram)
    truolo!: RuoloProgram;
	//troulo!: RuoloProgram;
	tstato!: Tstato;


	

    constructor(args: Cliente) {
      Object.assign(this, args);
    }

}
