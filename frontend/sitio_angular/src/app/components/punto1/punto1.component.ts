import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';

@Component({
  selector: 'app-punto1',
  templateUrl: './punto1.component.html',
  styleUrls: ['./punto1.component.css']
})

export class Punto1Component implements OnInit {

  productos!: Producto[];
  carrito!: Array<Producto>;

  precio_total!: number;
  mensaje!: string;

  constructor() {
    this.cargarProductos();

    this.carrito = new Array<Producto>();

    this.precio_total = 0;

    this.mensaje = "";
  }

  ngOnInit(): void {
  }

  /**
   * Metodo que carga, con valores por defecto, mi stock de productos
   * 
   */
  cargarProductos(): void {
    this.productos = [
      new Producto("PC Cpu Gamer", "Intel Core i7, GT 1030 2gb, 8Gb RAM", "/assets/images/productos/producto_pc.png", 290000),
      new Producto("Mouse Gamer", "M3 Blanco, 1600 dpi, inalámbrico", "/assets/images/productos/producto_mouse.png", 3690),
      new Producto("Teclado Gamer", "Alloy MKW100, TTC Linear Red, RGB", "/assets/images/productos/producto_teclado.png", 31789),
      new Producto("Auriculares Gamer", "Zeus X, Microfono, RGB", "/assets/images/productos/producto_auriculares.png", 25899),
      new Producto("Monitor BenQ", "GW2780, Led 27p, HD 100V/240V", "/assets/images/productos/producto_monitor.png", 94999),
      new Producto("Notebook Asus I7", "Vivobook 15, 512gb SSD, 16gb RAM", "/assets/images/productos/producto_notebook.png", 534999)
    ]
  }

  /**
   * Metodo que agrega un producto al listado del carrito de compra
   * 
   * @param producto 
   */
  agregarProducto(producto: Producto): void {
    if (!this.verificarExistencia(producto)) {
      this.carrito.push(producto);

      this.precio_total += producto.getPrecio();

      this.mensaje = "Se agrego el producto al carrito de compra";
    }
    else {
      this.mensaje = "El producto ya se encuentra en el carrito de compra";
    }
  }

  /**
   * Metodo que verifica la existencia del producto en el carrito de compra
   * 
   * @param producto 
   * @returns 
   */
  verificarExistencia(producto: Producto): boolean {
    let existe: boolean = false;

    for (let i: number = 0; i < this.carrito.length && existe == false; i++) {
      if (producto.getNombre() == this.carrito[i].getNombre()) {
        existe = true;
      }
    }

    return existe;
  }
}
