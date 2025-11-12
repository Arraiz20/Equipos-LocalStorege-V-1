export default class Cl_mEquipo {
    constructor({ nombreEquipo, cedula1, cedula2, cedula3, cedula4, nombre1, nombre2, nombre3, nombre4, }) {
        this._nombreEquipo = "";
        this._cedula1 = 0;
        this._cedula2 = 0;
        this._cedula3 = 0;
        this._cedula4 = 0;
        this._nombre1 = "";
        this._nombre2 = "";
        this._nombre3 = "";
        this._nombre4 = "";
        this.nombreEquipo = nombreEquipo;
        this.cedula1 = cedula1;
        this.cedula2 = cedula2;
        this.cedula3 = cedula3;
        this.cedula4 = cedula4;
        this.nombre1 = nombre1;
        this.nombre2 = nombre2;
        this.nombre3 = nombre3;
        this.nombre4 = nombre4;
    }
    // Nombre del Equipo
    set nombreEquipo(nombreEquipo) {
        this._nombreEquipo = nombreEquipo;
    }
    get nombreEquipo() {
        return this._nombreEquipo;
    }
    //Datos del Jugador 1
    set nombre1(nombre1) {
        this._nombre1 = nombre1;
    }
    get nombre1() {
        return this._nombre1;
    }
    set cedula1(cedula1) {
        this._cedula1 = +cedula1;
    }
    get cedula1() {
        return this._cedula1;
    }
    //Datos del Jugador 2
    set nombre2(nombre2) {
        this._nombre2 = nombre2;
    }
    get nombre2() {
        return this._nombre2;
    }
    set cedula2(cedula2) {
        this._cedula2 = +cedula2;
    }
    get cedula2() {
        return this._cedula2;
    }
    //Datos del Jugador 3
    set nombre3(nombre3) {
        this._nombre3 = nombre3 || null;
    }
    get nombre3() {
        return this._nombre3;
    }
    set cedula3(cedula3) {
        this._cedula3 = cedula3 ? +cedula3 : null;
    }
    get cedula3() {
        return this._cedula3;
    }
    //Datos del Jugador 4
    set nombre4(nombre4) {
        this._nombre4 = nombre4 || null;
    }
    get nombre4() {
        return this._nombre4;
    }
    set cedula4(cedula4) {
        this._cedula4 = cedula4 ? +cedula4 : null;
    }
    get cedula4() {
        return this._cedula4;
    }
    error() {
        if (this.cedula1 === 0) {
            return "Por favor ingrese la cedula del jugador 1";
        }
        if (this.cedula2 === 0) {
            return "Por favor ingrese la cedula del jugador 2";
        }
        if (this.cedula1 === this.cedula2)
            return "Las cedulas de los jugadores no pueden ser iguales";
        if (this.cedula3 !== null && this.cedula3 === this.cedula1)
            return "Las cedulas de los jugadores no pueden ser iguales";
        if (this.cedula4 !== null && this.cedula4 === this.cedula1)
            return "Las cedulas de los jugadores no pueden ser iguales";
        if (this.cedula4 !== null && this.cedula4 === this.cedula2)
            return "Las cedulas de los jugadores no pueden ser iguales";
        if (this.cedula3 !== null && this.cedula3 === this.cedula2)
            return "Las cedulas de los jugadores no pueden ser iguales";
        if (this.cedula3 !== null && this.cedula4 !== null && this.cedula3 === this.cedula4)
            return "Las cedulas de los jugadores no pueden ser iguales";
        return false;
    }
    // Validar Existencia de mismas cedulas en otros equipos
    existeCedula(cedula) {
        if (cedula === null)
            return false;
        if (this.cedula1 === cedula || this.cedula2 === cedula)
            return true;
        if (this.cedula3 !== null && this.cedula3 === cedula)
            return true;
        if (this.cedula4 !== null && this.cedula4 === cedula)
            return true;
        return false;
    }
    toJSON() {
        return {
            nombreEquipo: this._nombreEquipo,
            cedula1: this._cedula1,
            cedula2: this._cedula2,
            cedula3: this._cedula3,
            cedula4: this._cedula4,
            nombre1: this._nombre1,
            nombre2: this._nombre2,
            nombre3: this._nombre3,
            nombre4: this._nombre4,
        };
    }
}
