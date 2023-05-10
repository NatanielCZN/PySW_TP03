export class Ticket {

    id!: number;
    dni!: string;
    precioReal!: number;
    tipoEspectador!: string;
    fechaCobro!: Date;
    precioCobrado!: number;

    constructor(dni: string, precioReal: number, tipoEspectador: string) {
        this.dni = dni;
        this.precioReal = precioReal;
        this.tipoEspectador = tipoEspectador;
    }

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getDni(): string {
        return this.dni;
    }

    public setDni(dni: string): void {
        this.dni = dni;
    }

    public getPrecioReal(): number {
        return this.precioReal;
    }

    public setPrecioReal(precioReal: number): void {
        this.precioReal = precioReal;
    }

    public getTipoEspectador(): string {
        return this.tipoEspectador;
    }

    public setTipoEspectador(tipoEspectador: string): void {
        this.tipoEspectador = tipoEspectador;
    }

    public getFechaCobro(): Date {
        return this.fechaCobro;
    }

    public setFechaCobro(fechaCobro: Date): void {
        this.fechaCobro = fechaCobro;
    }

    public getPrecioCobrado(): number {
        return this.precioCobrado;
    }

    public setPrecioCobrado(precioCobrado: number): void {
        this.precioCobrado = precioCobrado;
    }
}
