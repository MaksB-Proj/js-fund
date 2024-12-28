//Concatenation and Interpolation
var price = 52
var itemName = "Table"
var messageToPrint = "The price for your "+itemName+" is "+price+" dollars" //Concatination
var messageToPrint2 = `the price for your ${itemName} is ${price} dollars` //Interpolation (better, modern)
console.log(messageToPrint)
console.log(messageToPrint2)