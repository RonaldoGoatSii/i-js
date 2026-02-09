const fruits = ["apple", "banana", "pineapple"];

// console.log(fruits);

// const fruit = fruits[2];

// console.log(fruit);

for (const f of fruits) {
  console.log(f);
}

for (
  let x = 0; 
  x < fruits.length; 
  x++
) {
  const f = fruits[x]
  
  console.log(f);
}




/////////////////////////////////

const myList = ["a", "b"];
// Alterada
// Reorganizada
// Itens Duplicados
// Diferentes tipos

// Adicionar um item a uma lista
myList.push("c"); // ["a", "b", "c"]
myList[0] = "d";  // ["d", "b", "c"]

// const snapList = myList

myList.reverse(); // ["c", "b", "d"]

const firstItem = myList[0];


let snapList = myList

////////////////////////////////////





//////////////////////////////////////////////

const myObject = {
  "chaveA": "Valor A",
  "chaveB": "Valor B"
};

// Associar um novo valor a uma nova chave
myObject["chaveB"] = "Valor C";

// Atribuindo novo valor a chave existente
myObject["chaveA"] = "Valor D";




///////////////////////////////////////////////




const students = [
  {
    "name": "Bruno",
    "age": 30
  },
  {
    "name": "Debora",
    "age": 28
  }
];

for (const student of students) {
  console.log(student.name);
  console.log(student.name);
};

// Output:
// Bruno
// Debora


//////////////////////////////////////////////




//////////////////// CLASSES E CONSTRUTORES /////////////////////////

class Student {
  constructor(id, name, grades, role) {
    this.id = id;
    this.name = name;
    this.grades = grades;
    this.role = role;
  }
}


//////////////////////////////////////////////



