export default class Cl_mJuego {
    constructor() {
        this.equipos = [];
    }
    AgregarEquipo({ equipo, callback, }) {
        const nombreRepetido = this.equipos.find((e) => e.nombreEquipo === equipo.nombreEquipo);
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
            if (e.existeCedula(equipo.cedula1) ||
                e.existeCedula(equipo.cedula2) ||
                e.existeCedula(equipo.cedula3) ||
                e.existeCedula(equipo.cedula4)) {
                callback(`El equipo ${equipo.nombreEquipo} tiene cédula repetida con el equipo ${e.nombreEquipo}.`);
                return;
            }
        }
        this.equipos.push(equipo);
        localStorage.setItem("equipos", JSON.stringify(this.equipos));
        callback(false);
    }
    listar() {
        let equipos = [];
        this.equipos.forEach((e) => equipos.push(e.toJSON()));
        return equipos;
    }
}
