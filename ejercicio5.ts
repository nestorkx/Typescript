// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.
class Rectangulo {
    public base:number;
    public altura:number;

    constructor(base:number,altura:number) {
        this.base   = base;
        this.altura = altura;
    }

    calcularArea():number{
        return this.base*this.altura;
    }
}

let clase:Rectangulo = new Rectangulo(2,3);
console.log(clase.calcularArea());