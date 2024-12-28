// Declarative function - can be called even before the function declaration
helloOne()
function helloOne(){
    console.log('Hello One!')
}


//Anonymous function
var hellotwo = function(){
    console.log('Hello Two!')
}
hellotwo()

//ES6 function syntax or arrow function
var helloThree = () => {
    console.log('Hello Three!')
}
helloThree()

// function with parameter
function printName (name, lastName) {
    console.log(name + ' ' + lastName)
}
printName('Mite', "Pollen")

// function with return
function multiplyByTwo (number) {
    var result = number * 2
    return result
}
console.log(multiplyByTwo(3))

//Import function
import { printAge } from '../helpers/printHelper.js'
printAge(335)

//Import everything
import * as helper from '../helpers/printHelper.js'
helper.printAge(123)