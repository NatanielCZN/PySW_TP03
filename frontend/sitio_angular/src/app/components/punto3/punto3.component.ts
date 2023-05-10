import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { Ticket } from 'src/app/models/ticket';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-punto3',
  templateUrl: './punto3.component.html',
  styleUrls: ['./punto3.component.css']
})
export class Punto3Component implements OnInit {

  ticket!: Ticket;
  accion!: string;  // accion tendra los valores de new o update

  constructor(private serviceTicket: TicketService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.ticket = new Ticket("", 0, "l");

    this.accion = "new";
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['id'] == "0") {
        this.accion = "new";
      } else {
        this.accion = "update";

        this.cargarTicket(params['id']);
      }
    });
  }

  /**
   * Metodo que carga los datos de una compra de ticket en el formulario
   * 
   * @param id 
   */
  cargarTicket(id: number): void {
    this.ticket = this.serviceTicket.getTicket(id);
  }

  /**
   * Metodo que guarda un ticket en la lista, mediante el serviceTicket
   * 
   */
  guardarTicket(): void {
    this.ticket.setFechaCobro(new Date());

    this.serviceTicket.addTicket(this.ticket);

    this.router.navigate(['punto3-lista']);
  }

  /**
   * Metodo que calcula el descuento del precioCobrado, segun el tipo
   * 
   */
  calcularDescuento(): void {
    this.ticket.setPrecioCobrado(this.ticket.getPrecioReal());

    if (this.ticket.getTipoEspectador() == 'l') {
      this.ticket.setPrecioCobrado(this.ticket.getPrecioReal() - (this.ticket.getPrecioReal() * 0.2));
    }
  }

  /**
   * Metodo que verifica si las condiciones para mostrar el calculo del precio a cobrar se cumplen
   * 
   * @returns 
   */
  comprobarDescuento(): boolean {
    if (this.ticket.getPrecioReal() > 0 && this.ticket.getTipoEspectador() != '-') {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Metodo que actualiza los datos de la compra de ticket, mediante el serviceTicket
   * 
   */
  actualizarTicket(): void {
    this.serviceTicket.updateTicket(this.ticket);

    this.router.navigate(['punto3-lista']);
  } 

  /**
   * Metodo que retorna a la lista de tickets
   * 
   */
  volverALista(): void {
    this.router.navigate(['punto3-lista']);
  }
}
