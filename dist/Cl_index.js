/**
 * Se requiere una micro-APP que permita registrar la información de  equipos y jugadores
 * para distintos juegos de fútbol. Cada equipo admite un mínimo de 2 y maximo de 4 jugadores.
 * de los que se conoce su cédula y nombre.
 * Cada equipo también tiene un nombre. Los nombres de los grupos no pueden repetirse.
 * La cédula de los jugadores tampoco puede repetirse.
 *
 * Se requiere que la micro- App permita:
 * - Crear Grupos
 * -Listar Grupos.
 * - Validar las restricciones indicadas.
 * -Los dos datos obligatorios en cada jugador.
*/
import Cl_controlador from "./Cl_controlador.js";
import Cl_mEquipo from "./Cl_mEquipo.js";
import Cl_mJuego from "./Cl_mJuego.js";
import Cl_vJuego from "./Cl_vJuego.js";
export default class Cl_index {
    constructor() {
        this.modelo = new Cl_mJuego();
        let equipoLS = localStorage.getItem("equipos");
        if (equipoLS) {
            let equipoDT = JSON.parse(equipoLS);
            equipoDT.forEach((equipo) => {
                this.modelo.AgregarEquipo({
                    equipo: new Cl_mEquipo(equipo),
                    callback: (error) => {
                        // Ignorar errores al cargar desde localStorage
                    },
                });
            });
        }
        this.vista = new Cl_vJuego();
        let controlador = new Cl_controlador(this.modelo, this.vista);
        this.vista.controlador = controlador;
        this.vista.refresh();
    }
}
