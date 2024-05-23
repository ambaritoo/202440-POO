// Suggested code may be subject to a license. Learn more: ~LicenseLog:2127465898.
class Persona {
  constructor(nombre, edad, carrera, semestre, promedio, genero, ciudad, estado, pais, telefono) {
    this.nombre = nombre;
    this.edad = edad;
    this.carrera = carrera;
    this.semestre = semestre;
    this.promedio = promedio;
    this.genero = genero;
    this.ciudad = ciudad;
    this.estado = estado;
    this.
pais = pais;
    this.telefono = telefono;
  }

  presentarse() {
    console.log(`Hola, mi nombre es ${this.nombre} y estudio ${this.carrera}.`);
  }

  estudiar() {
    console.log(`${this.nombre} está estudiando para su próximo examen.`);
  }
}

const persona1 = new Persona("Yatziri", 20, "Ingeniería en Sistemas", 5, 9.5, "Femenino", "Ciudad de México", "CDMX", "México", "7442345678");
const persona2 = new Persona("Misael", 20, "Gasrtonomia", 7, 8.5, "Masculino", "Acapulco", "Guerrero", "México", "7448765432");
const persona3 = new Persona("Dennis", 19, "Sistemas", 3, 7.5, "Masculino", "Acapulco", "Guerrero", "México", "7445432109");

persona1.presentarse();
persona1.estudiar();

persona2.presentarse();
persona2.estudiar();

persona3.presentarse();
persona3.estudiar();
