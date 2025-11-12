import Cl_mEquipo from "./Cl_mEquipo.js";
export default class Cl_controlador {
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;
    }
    AgregarEquipo({ equipoData, callback, }) {
        this.modelo.AgregarEquipo({
            equipo: new Cl_mEquipo(equipoData),
            callback: (error) => {
                callback(error);
            },
        });
    }
    EquiposRegistrados() {
        return this.modelo.listar();
    }
}
