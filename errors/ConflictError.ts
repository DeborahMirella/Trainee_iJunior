/**
 * O parâmetro passado atende aos requerimento exigidos, porém entra em conflito com os dados já registrados no banco de dados.
 */
export class ConflictError extends Error {
	constructor(msg: string) {
		super(msg);
		this.name = "ConflictError";
	}
}
