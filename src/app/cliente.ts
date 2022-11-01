import { RuoloProgram } from "./ruolo-program";
import { Tstato } from "./tstato";

export class Cliente {
    matricola!: number;
	cartaIdentita!: string;
	codiceFiscale!: string;
	cognome!: string;
	dataAssunzione!: Date;
	dataDiNascita!: Date;
	luogoDiNascita!: string;
	nome!: string;
	troulo!: RuoloProgram;
	tstato!: Tstato;
}
