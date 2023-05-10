export class Palabra {
    
    private valor: string;
    private cantidad_vocales: number;
    private cantidad_consonantes: number;
    private cantidad_letras: number;
    private cantidad_silabas: number;

    constructor(valor: string, cantidad_vocales: number, cantidad_consonantes: number, cantidad_letras: number, cantidad_silabas: number) {
        this.valor = valor;
        this.cantidad_vocales = cantidad_vocales;
        this.cantidad_consonantes = cantidad_consonantes;
        this.cantidad_letras = cantidad_letras;
        this.cantidad_silabas = cantidad_silabas;
    }

    public getValor(): string {
        return this.valor;
    }

    public setValor(valor: string): void {
        this.valor = valor;
    }

    public getCantidad_vocales(): number {
        return this.cantidad_vocales;
    }

    public setCantidad_vocales(cantidad_vocales: number): void {
        this.cantidad_vocales = cantidad_vocales;
    }

    public getCantidad_consonantes(): number {
        return this.cantidad_consonantes;
    }

    public setCantidad_consonantes(cantidad_consonantes: number): void {
        this.cantidad_consonantes = cantidad_consonantes;
    }

    public getCantidad_letras(): number {
        return this.cantidad_letras;
    }

    public setCantidad_letras(cantidad_letras: number): void {
        this.cantidad_letras = cantidad_letras;
    }

    public getCantidad_silabas(): number {
        return this.cantidad_silabas;
    }

    public setCantidad_silabas(cantidad_silabas: number): void {
        this.cantidad_silabas = cantidad_silabas;
    }
}
