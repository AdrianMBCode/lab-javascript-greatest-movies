//advanced functions

//function declaration
function saludar() {
    console.log("buenos días, es lunes");
}

let alumnos = ["Ivan", "Roberto", "Hernando"];
//function expression: No se puede utilizar antes de definir (HOISTING)
//es anónima
alumnos.forEach(function (alumno, i) {

});

//arrow function
//es anónima
const saludarArrow = nombre => {
    console.log("hola ", nombre);
}
saludarArrow("Mariona");

const saludarArrowGenerico = () => console.log("Hola a todos");

// const getNombre = nombre => nombre;
const getNombre = function(nombre) {
    return nombre;
};

alumnos.forEach((alumno)=>{
    console.log(alumno[0]);
})

//CALLBACK: función que se pasa como parámetro y que se puede ejecutar en cualquier momento dentro de la función declarada

function comer(callback) {
    console.log(typeof callback);
    setTimeout(function(){
        //función asíncrona
        console.log("comiendo el plato principal");
        setTimeout(function(){
            // if(callback) callback();
            if(typeof callback == "function") callback();
        }, 3000)
    }, 3000);
    // comerPostre();
}
function comerPostre() {
    setTimeout(function(){
        console.log("comiendo el postre");
    }, 2000);
}
// comerPostre();

// comer(comerPostre);
// comer(function() {
//     console.log("lavando los dientes");
// });
// comer();
// comer(6);

//SETINTERVAL
// let identificador = setInterval(function(){
//     console.log("setInterval 2 segundos!");
// }, 2000);

// let iteracion = 0;
// let identificador2 = setInterval(()=>{
//     iteracion ++;
//     if(iteracion >= 3) {
//         clearInterval(identificador2);
//     }
//     console.log("setInterval 1 segundo!");
// }, 1000);

// setTimeout(function(){
//     console.log("Matando intervalo!");
//     clearInterval(identificador);
//     clearInterval(identificador2);
// }, 5000);


function setEdad(numero) {
    console.log(numero);
    console.log("arguments", arguments);
}
setEdad(3, 4,"hola", [1,2,3]);
setEdad(7);

function setAlumnos() {
    console.log("has seteado " + arguments.length + " alumnos");
    console.log("lista de alumnos: ", arguments);
    let arrayAlumnos = Array.from(arguments);
    console.log(arrayAlumnos);
}
setAlumnos("Ruben", "Raul", "Gerard");
setAlumnos("Ruben", "Raul", "Gerard", "Lucía", "Adrian", "Mario");
// Object.from([])

//THIS
const user = {
    name: 'ana',
    age: 29,
    getOlder: function () {
      console.log(this);
      setInterval(function() {
        //perdemos el contexto (this)
        this.age += 1;
        console.log(this);
      }, 1000);
    },
    getOlderArr: function () {
        // console.log(this);
        setInterval(() => {
            //perdemos el contexto (this)
            this.age += 1;
            console.log(this);
          }, 1000);
    }
  };
   
  //SETINTERVAL / SETTIMEOUT -> utilizaremos ARROW FUNCTION
  
//   user.getOlderArr();

  //FUNCTION DECLARATION: 
  // - THIS es quien está detras del punto a la hora de ejecutar
  // - si se ejecuta de forma asíncrona (settimeout o setinterval) se pierde el contexto

  //ARROW FUNCTION:
  // - THIS se hereda de la función donde está definida
  // - si se ejecuta de forma asíncrona NO SE PIERDE el contexto :)

  let usuario = {
    nombre: "Mariona",
    apellido: "Roca",
    edad: 37,
    setEdad: function(nuevaEdad) {
        this.edad = nuevaEdad;
        console.log("setEdad: ", this); //THIS es el usuario
    },
    direccion: {
        calle: "major",
        setDireccion: function(direccion) {
            console.log("setDireccion: ", this);    //THIS es direccion
        }
    }
}
function funcionTest(){
    console.log("functionTest: ", this);    //Objeto "global"
}

usuario.setEdad(38);    
usuario.direccion.setDireccion("Major, 21");
funcionTest();

let usuarioArrow = {
    nombre: "Mariona",
    edad: 37,
    apellido: "Roca",
    setEdad: function(nuevaEdad) {
        var objetoTest = {
            param1: "hola",
            param2: "bu",
            functionDec: function() {
                console.log("funcionDec dentro de objetoTest: ", this);    //this = {}
            }
        }
        objetoTest.functionDec();
    },
    direccion: {
        calle: "major",
        setDireccion: (direccion) => {
            console.log("ARRRR setDireccion: ", this);
            // this.dir = direccion;

        }
    },
    direccionVerano: {
        calle: "menor",
        setDireccion: (direccion) => {
            console.log("Arr setDireccion ", this);
        }
    }
}
usuarioArrow.direccion.setDireccion("pamplona 96");
usuarioArrow.setEdad(65);


//MAP, REDUCE, FILTER -> NO MUTAN AL ARRAY ORIGINAL
//MAP:
let numeros = [1, 2, 3];
let numeroDuplicados = numeros.map((numero) => {
    return numero * 2;
})
console.log(numeroDuplicados);

for(let i=0; i<numeros.length; i++) {
    numeros[i] *= 2;
}

let cities = ['miami', 'barcelona', 'Madrid', 'amsterdam', 'berlin', 'sao paulo', 'lisbon', 'mexico city', 'paris'];

let citiesMay = cities.map((city) =>{
    // return city.toUpperCase();
    if(city == "barcelona") return `Los de ${city} molamos mas`;
    return `Bienvenido a ${city}`;
})

let alumnosClase = [{nombre: "Ruben", edad: 35}, {nombre:"Andrea", edad: 35}, {nombre:"Ivan", edad: 14}, {nombre:"Eduardo", edad: 50}];
let alumnosClaseMod = alumnosClase.map(alumno => {
    alumno.campus = "Barcelona";
    alumno.edad ++;
    return alumno;
})

console.log(alumnosClaseMod);

//REDUCE: convertir a un solo valor
const numbers = [2, 4, 6, 8];

let valorFinal = numbers.reduce((accumulator, currentVal) => {
    return accumulator + currentVal;
});
console.log(valorFinal);

let citiesFrase = cities.reduce((accumulator, city) => {
    return accumulator + " " + city;
})
console.log(typeof citiesFrase);

let valorEdades = alumnosClase.reduce((accumulator, alumno)=>{
    return accumulator + alumno.edad;
}, 0)
console.log(valorEdades);

//FILTER: Filtrar por una condicion
let citiesM = cities.filter((city)=>{
    if(city[0] == "m") return city;
})
console.log(citiesM);

const numbersFilter = [1, 2, 3, 4, 5, 6];
let numberPar = numbersFilter.filter((number) => {
    //si retorna truthy lo añade
    //si retorna falsy no lo añade
    return number%2 == 0;
})
console.log(numberPar);

let i =0;
let alumnosMayores40 = alumnosClase.filter(alumno => {
    i++;
    return i<51 && alumno.edad > 40 && alumno.edad < 75;
});
console.log(alumnosMayores40);

//SORT, REVERSE -> SÍ MUTAN AL ARRAY ORIGINAL
//SORT: ordenar
// let numerosDesordenados = [4,1,5,6,2];
let numerosDesordenados = [22, 23, 99, 68, 1, 0, 9, 112, 223, 64, 18];
numerosDesordenados.sort((a, b) => {
    return a-b; //ascendiente
    return b-a; //descendiente
});
console.log(numerosDesordenados);

cities.sort().reverse();
console.log(cities);

alumnosClase.sort((a,b)=>{
    return b.edad - a.edad;
});
console.log(alumnosClase);

//REVERSE: invertir
// console.log(numbersFilter);
// numbersFilter.reverse();
// console.log(numbersFilter);