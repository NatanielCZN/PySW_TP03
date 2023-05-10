export class Opcion {

    private direccion: string;
    private valor: number;

    constructor(direccion: string, valor: number) {
        this.direccion = direccion;
        this.valor = valor;
    }

    public getDireccion(): string {
        return this.direccion;
    }

    public setDireccion(direccion: string): void {
        this.direccion = direccion;
    }

    public getValor(): number {
        return this.valor;
    }

    public setValor(valor: number): void {
        this.valor = valor;
    }
}
