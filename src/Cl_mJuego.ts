import Cl_mEquipo, { iEquipo } from "./Cl_mEquipo.js";
export default class Cl_mJuego {
  private equipos: Cl_mEquipo[] = [];
  AgregarEquipo({
    equipo,
    callback,
  }: {
    equipo: Cl_mEquipo;
    callback: (error: string | false) => void;
  }): void {
    const nombreRepetido = this.equipos.find(
      (e) => e.nombreEquipo.toUpperCase().trim() === equipo.nombreEquipo.toUpperCase().trim()
    );
    if (nombreRepetido) {
      callback("El nombre del equipo ya existe");
      return;
    }

    const cedulaRepetida = equipo.error();

    if (cedulaRepetida) {
      callback("La cédula del jugador ya existe");
      return;
    }
    // Validar cedulas contra todos los grupos existentes
    for (const e of this.equipos) {
      if (
        e.existeCedula(equipo.cedula1) ||
        e.existeCedula(equipo.cedula2) ||
        e.existeCedula(equipo.cedula3) ||
        e.existeCedula(equipo.cedula4)
      ) {
        callback(
          `El equipo ${equipo.nombreEquipo} tiene cédula repetida con el equipo ${e.nombreEquipo}.`
        );
        return;
      }
    }

    this.equipos.push(equipo);
    localStorage.setItem("equipos", JSON.stringify(this.equipos));
    callback(false);
  }
  listar(): iEquipo[] {
    let equipos: iEquipo[] = [];
    this.equipos.forEach((e) => equipos.push(e.toJSON()));
    return equipos;
  }
}
