import { Component, OnInit } from '@angular/core';
import { Opcion } from 'src/app/models/opcion';
import { Palabra } from 'src/app/models/palabra';

@Component({
  selector: 'app-punto2',
  templateUrl: './punto2.component.html',
  styleUrls: ['./punto2.component.css']
})
export class Punto2Component implements OnInit {

  palabra!: Palabra;
  palabras!: Palabra[];
  opciones!: Opcion[];
  opciones_juego!: Array<Opcion>;
  opcion_correcta!: Opcion;
  jugando!: boolean;
  indice!: number;
  cantidad_opciones!: number;
  aciertos!: number;
  errores!: number;
  mensaje!: string;
  color_mensaje!: string;
  tipos_a_contar!: string[];
  tipo_a_contar!: string;

  constructor() {
    this.cargarPalabras();

    this.cargarOpciones();

    this.opciones_juego = new Array<Opcion>();

    this.jugando = false;

    this.mensaje = "";

    this.color_mensaje = "bg-warning";

    this.tipos_a_contar = ["VOCALES", "CONSONANTES", "LETRAS", "SILABAS"];

    this.cantidad_opciones = 3;
  }

  ngOnInit(): void {
  }

  /**
   * Metodo que cargara las 10 palabras solicitadas en una lista
   * 
   */
  cargarPalabras(): void {
    this.palabras = [
      new Palabra("MANZANA", 3, 4, 7, 3),
      new Palabra("MATE", 2, 2, 4, 2),
      new Palabra("FUTBOL", 2, 4, 6, 2),
      new Palabra("TIBURON", 3, 4, 7, 3),
      new Palabra("ARTESANO", 4, 4, 8, 4),
      new Palabra("FOTO", 2, 2, 4, 2),
      new Palabra("BARCO", 2, 3, 5, 2),
      new Palabra("MASCOTA", 3, 4, 7, 3),
      new Palabra("PANADERIA", 5, 4, 9, 5),
      new Palabra("ESCUELA", 4, 3, 7, 3)
    ]
  }

  /**
   * Metodo que cargara las opciones del juego (Numeros del 1 al 10)
   * 
   */
  cargarOpciones(): void {
    this.opciones = [
      new Opcion("/assets/images/numeros/numero_01.png", 1),
      new Opcion("/assets/images/numeros/numero_02.png", 2),
      new Opcion("/assets/images/numeros/numero_03.png", 3),
      new Opcion("/assets/images/numeros/numero_04.png", 4),
      new Opcion("/assets/images/numeros/numero_05.png", 5),
      new Opcion("/assets/images/numeros/numero_06.png", 6),
      new Opcion("/assets/images/numeros/numero_07.png", 7),
      new Opcion("/assets/images/numeros/numero_08.png", 8),
      new Opcion("/assets/images/numeros/numero_09.png", 9),
      new Opcion("/assets/images/numeros/numero_10.png", 10)
    ]
  }

  /**
   * Metodo que inicializa las variables necesarias para comenzar el juego
   * 
   */
  comenzarJuego(): void {
    this.jugando = true;

    this.indice = 0;

    this.aciertos = 0;

    this.errores = 0;

    this.barajarArreglo(this.palabras);

    this.cargarNivel();
  }

  /**
   * Metodo que carga un nivel del juego
   * 
   */
  cargarNivel(): void {
    this.palabra = this.palabras[this.indice];

    this.definirTipoAContar();

    this.cargarOpcionCorrecta(this.palabra);

    this.cargarOpcionesDeJuego();

    this.barajarArreglo(this.opciones_juego);
  }

  /**
   * Metodo que, al ejecutarlo, carga el siguiente nivel del juego
   * 
   */
  siguienteNivel(): void {
    this.indice++;

    if (this.indice < this.palabras.length) {
      this.mensaje = "Nivel " + this.indice;

      this.cargarNivel();
    } else {
      this.mensaje = "Resultado Final";

      this.color_mensaje = "bg-warning";

      this.jugando = false;
    }
  }

  /**
   * Metodo que verifica si la opcion seleccionada es correcta
   * 
   * @param numero_opcion 
   */
  verificarOpcion(numero_opcion: number): void {
    if (numero_opcion == this.opcion_correcta.getValor()) {
      this.aciertos++;

      this.color_mensaje = "bg_verde";
    } else {
      this.errores++;

      this.color_mensaje = "bg-danger";
    }

    this.siguienteNivel();
  }

  /**
   * Metodo que carga las opciones del juego
   * 
   */
  cargarOpcionesDeJuego(): void {
    this.opciones_juego = new Array<Opcion>();

    this.opciones_juego.push(this.opcion_correcta);

    let opcion_valida: Opcion;

    for (let i: number = 0; i < this.cantidad_opciones; i++) {
      do {
        opcion_valida = this.obtenerOpcionAleatoria();
      } while (this.verificarExistenciaDeOpcion(opcion_valida.getValor()));

      this.opciones_juego.push(opcion_valida);
    }
  }

  /**
   * Metodo que verifica la existencia de una misma opcion en las opciones del juego
   * 
   * @param valor 
   * @returns 
   */
  verificarExistenciaDeOpcion(valor: number): boolean {
    let existe: boolean = false;

    for (let i: number = 0; i < this.opciones_juego.length && existe == false; i++) {
      if (this.opciones_juego[i].getValor() == valor) {
        existe = true;
      }
    }

    return existe;
  }

  /**
   * Metodo que retorna una opcion aleatoria de la lista
   * 
   * @returns 
   */
  obtenerOpcionAleatoria(): Opcion {
    return this.opciones[this.obtenerPosicionAleatoria(this.opciones.length)];
  }

  /**
   * Metodo que retornara la opcion correcta de acuerdo a la palabra seleccionada
   * 
   * @param palabra 
   */
  cargarOpcionCorrecta(palabra: Palabra): void {
    if (this.tipo_a_contar == "VOCALES") {
      this.opcion_correcta = this.opciones[palabra.getCantidad_vocales() - 1];
    } else if (this.tipo_a_contar == "CONSONANTES") {
      this.opcion_correcta = this.opciones[palabra.getCantidad_consonantes() - 1];
    } else if (this.tipo_a_contar == "LETRAS") {
      this.opcion_correcta = this.opciones[palabra.getCantidad_letras() - 1];
    } else {
      this.opcion_correcta = this.opciones[palabra.getCantidad_silabas() - 1];
    }
  }

  /**
   * Metodo que devolvera una posicion aleatoria de un arreglo segun su longitud
   * 
   * @param longitud 
   * @returns 
   */
  obtenerPosicionAleatoria(longitud: number): number {
    return Math.floor((Math.random() * longitud));
  }

  /**
   * Metodo que baraja un arreglo
   * 
   * @param arreglo
   */
  barajarArreglo(arreglo: Array<any>): void {
    arreglo.sort(function () { return Math.random() - 0.5 });
  }

  /**
   * Metodo que define el tipo de lo que se debe contar de la palabra
   * 
   */
  definirTipoAContar(): void {
    this.tipo_a_contar = this.tipos_a_contar[this.obtenerPosicionAleatoria(this.tipos_a_contar.length)];
  }
}
