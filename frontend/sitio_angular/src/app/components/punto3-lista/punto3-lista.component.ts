import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ticket } from 'src/app/models/ticket';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-punto3-lista',
  templateUrl: './punto3-lista.component.html',
  styleUrls: ['./punto3-lista.component.css']
})
export class Punto3ListaComponent implements OnInit {

  tickets!: Array<Ticket>;

  constructor(private serviceTicket: TicketService, private router: Router) {
    this.tickets = new Array<Ticket>();

    this.cargarTickets();
  }

  ngOnInit(): void {
  }

  /**
   * Metodo que, mediate el serviceTickets, cargo la lista en la variable tickets
   * 
   */
  cargarTickets(): void {
    this.tickets = this.serviceTicket.getTickets();
  }

  /**
   * Metodo que redirecciona al formulario de compra
   * 
   */
  realizarCompra(): void {
    this.router.navigate(['punto3', 0]);  // De esta forma se pasa un parametro al "punto3"
  }

  /**
   * Metodo que redirecciona al formulario de compra para realizar una modificacion
   * 
   * @param ticket 
   */
  modificarCompra(ticket: Ticket): void {
    this.router.navigate(['punto3', ticket.getId()]);
  }

  eliminarCompra(ticket: Ticket): void {
    this.serviceTicket.deleteTicket(ticket.getId());
  }
}
