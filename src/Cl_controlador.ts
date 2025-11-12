import Cl_mEquipo, { iEquipo} from "./Cl_mEquipo.js";
import Cl_mJuego from "./Cl_mJuego.js";
import Cl_vJuego from "./Cl_vJuego.js";

export default class Cl_controlador {
  public modelo: Cl_mJuego;
  public vista: Cl_vJuego;
  constructor(modelo: Cl_mJuego, vista: Cl_vJuego) {
    this.modelo = modelo;
    this.vista = vista;
  }
  AgregarEquipo({
    equipoData,
    callback,
  }: {
    equipoData: iEquipo;
    callback: Function;
  }): void {
    this.modelo.AgregarEquipo({
      equipo: new Cl_mEquipo(equipoData),
      callback: (error: string | false) => {
        callback(error);
      },
    });
  }
  EquiposRegistrados(): iEquipo[] {
    return this.modelo.listar();
  }
}
