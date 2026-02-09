// let age = 1
// const var_name = "Bruno"

// age = 10

// // "e" -> &&
// // "ou" -> ||
// // >, <, >= e <=

// // else
// if (age > 15) { 
//   console.log("É maior que 15 anos!")
// }
// else if (age <= 10) {
//   console.log("A idade é inferior ou igual a 10 anos!")
// }

// if (age > 15 && age < 20) {
//   console.log("A idade está entre 15 e 20 anos!")
// }

// if (age > 20 || age < 10) {
//   console.log("A idade é superior a 20 ou inferior a 10!")
// }

// // "não"

// if (age !== 1) {
//   console.log("A idade não é igual a 1!")
// }


//////////////////////////////////////////////////////////////

//let num = 12;
//if (num >= 10 && num <= 20 && num !== 15) {
//  console.log("O numero está entre 10 e 20 e não é 15");
//} else {
//  console.log("O numero não é 15.");
//}

///////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////

// const numero = 12; 

// if (numero === 5 || numero === 10 || numero === 15) {
//     console.log("Código interrompido.");
// } else {

//     const mensagem = numero >= 10 ? "Aprovado" : "Reprovado";
//     console.log(mensagem);
// }

///////////////////////////////////////////////////////////////

//  prompt = require('prompt-sync')();

// let number = parseInt(prompt('Insere um valor: '));

//  function verValor(numero) {
//     if (numero % 5 === 0) {
//         console.log("O número é múltiplo de 5.");
//         return; 
//     }
// }

// verValor(number);


///////////////////////////////////////////////////////////////

// function getFullName(firstName, lastName) {
//   console.log('Creating user...');
//   console.log(`O primeiro nome é ${firstName}`);
//   console.log(`O sobrenome é ${lastName}`);

//   return `Seu nome completo é ${firstName} ${lastName}`;
// }

// const fName = 'João';
// const lName = 'Silva';
// const fullName = getFullName(fName, lName)

// //---

// // Itens repetidos
// // Variar tipos
// // Alterar/adicionar/remover os itens dessa lista
// const fruits = ["apple", 1, "apple", 2, "melon", "orange", "banana", "pineapple"]
// const firstFruit = fruits[0]

// // const fruits_kcal = {
// //   "apple": 86,
// //   "melon": 110,
// //   "orange": 66
// // }

// const fruits_kcal = {}
// fruits_kcal["apple"] = 86
// fruits_kcal["melon"] = 110
// fruits_kcal["orange"] = 66

//////////////////////////////////////////////

///////////////////////////////////////////////

const prompt = require('prompt-sync')();

let number = parseInt(prompt('Insere um valor: '));

function verValor(numero) {

    if (numero === 15) {
        return "É igual a 15";
    }

    if (numero % 5 === 0) {
        return "Função interrompida, pois o número é múltiplo de 5";
    }

    return (numero >= 10 && numero <= 20) 
        ? "Está entre 10 e 20" 
        : "Não está entre 10 e 20";
}


console.log(verValor(number));


///////////////////////////////////////////////

//////////////////// CLASSES E CONSTRUTORES /////////////////////////

class Student {
  constructor(id, name, grades, role) {
    this.id = id;
    this.name = name;
    this.grades = grades;
    this.role = role;
  }

}

const studentA = Student(1, "Bruno", [1, 2, 3], "default");
const studentB = Student(2, "Jose", [3, 4, 5], "admin");



//////////////////////////////////////////////


//////////////////// CLASSES E CONSTRUTORES /////////////////////////

class Dog {
  constructor(race, color, name) {
    this.race = race;
    this.color = color;
    this.name = name;
  }

  bark(what){
    console.log(`O cachorro ${this.name} latiu para ${what}!`);
  }
  bite(who){
    console.log(`O cachorro ${this.name} mordeu a/o ${who}!`);
  }
}

const doginho = Dog("Bacê", "Marrom", "Pituca");
const catcholo = Dog("Pitbull", "Branco", "Mancha");

doginho.bark("Bruno");
doginho.bark("Christian");
catcholo.bite("Cleber");

//////////////////////////////////////////////





