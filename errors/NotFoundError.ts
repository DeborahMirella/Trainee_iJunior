/**
 * Caso em que um produto não foi encontrado. 
 */
export class NotFoundError extends Error {
    constructor(msg: string) {
        super(msg);
        this.name = 'NotFoundError';
    }
}