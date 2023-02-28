
// How to import function
// const names = require('./names') 
        // or
const {Ipsome, lorem } = require (`./names`)  
const sayHello = require('./proper')

console.log ("Hello node!");
// console.log (`names.Ipsome`);
console.log(Ipsome);
console.log(lorem);

// Name veriale
// const lorem = `Lorem`       
// const Ipsome = `ipsome `

// const sayHello = (names) =>{
//     console.log("greetings");

// }
// function sayHello(names) {
//     console.log(`Hello there: ${names}`)
    
// }


sayHello(`iMadious`)
// Distructuring with name of the module or file eg names.Ipsome
sayHello (lorem)
sayHello(Ipsome)

// importing list
// const list = 
require('./list')
// Distructuring with name of the module or file eg names.itemList
console.log(list.itemList);
console.log(list.person);
