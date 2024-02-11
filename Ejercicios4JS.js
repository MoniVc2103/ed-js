class Autobus {

    constructor(capacidad, pasajeros, matricula, listadoConductores) {
        this.capacidad = capacidad;
        this.pasajeros = pasajeros;
        this.matricula = matricula;
        this.listadoConductores = listadoConductores;
    }

    getCapacidad() {
        return this.capacidad;
    }
    setCapacidad(capacidad) {
        this.capacidad = capacidad;
    }
    getPasajeros() {
        return this.pasajeros;
    }
    setPasajeros(pasajeros) {
        this.pasajeros = pasajeros;
    }
    getMatricula() {
        return this.matricula;
    }
    setMatricula(matricula) {
        this.matricula = matricula;
    }
    getlistadoConductores() {
        return this.listadoConductores;
    }
    setlistadoConductores(listadoConductores) {
        this.listadoConductores = listadoConductores;
    }

    mostrardatosAutobus() {
        console.log('Capacidad: ' + this.capacidad + ' Pasajeros: ' + this.pasajeros + ' Matricula: ' + this.matricula);
        for (let i = 0; i < this.listadoConductores.length; i++) {
            let conductor = this.listadoConductores[i];
            conductor.mostrarConductor();
        }
    }
    subir(numPasajeros) {
        if (this.pasajeros + numPasajeros <= this.capacidad) {
            this.pasajeros += numPasajeros;

        } else {
            this.pasajeros = this.capacidad
        }
    }

    bajar(numPasajeros) {
        if (this.pasajeros - numPasajeros >= 0) {
            this.pasajeros -= numPasajeros;
        } else {
            this.pasajeros = 0;
        }

    }
}

class Conductor {

    constructor(nombre, licencia) {
        this.nombre = nombre;
        this.licencia = licencia;
    }

    getnombre() {
        return this.nombre;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    getLicencia() {
        return this.licencia;
    }
    setLicencia(licencia) {
        this.licencia = licencia;
    }

    mostrarConductor() {
        console.log('Nombre: ' + this.nombre + ' Licencia: ' + this.licencia);
    }

}

function main() {

    let listadoConductores = new Array();
    listadoConductores[0] = new Conductor("Tomás", "1234T")
    listadoConductores[1] = new Conductor("Maria", "1534H")
    listadoConductores[2] = new Conductor("Oscar", "1830L")
    listadoConductores[3] = new Conductor("Leticia", "0810K")


    let autobus1 = new Autobus("30", "4", "A2345D", listadoConductores);

    autobus1.mostrardatosAutobus();

    console.log('Listado de Conductores:');
    for (let i = 0; i < listadoConductores.length; i++) {
        let conductor = listadoConductores[i];
        console.log('Conductor ' + (i + 1) + ': ' + conductor.nombre + ' (Licencia: ' + conductor.licencia + ')');
    }
}


main();