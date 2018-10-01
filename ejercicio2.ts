// Cree una interfaz que sirva para validar el siguiente objeto
interface LigaJusticia{
    nombre:string;
    artesMarciales:string[];
}

let batman:LigaJusticia = {
    nombre: "Bruno Díaz",
    artesMarciales: ["Karate","Aikido","Wing Chun","Jiu-Jitsu"]
}

console.log(batman);