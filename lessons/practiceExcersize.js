let familySize = 3;
var plannedDistanceToDrive = 199

function recommendedCar(familySize, plannedDistanceToDrive) {
    var recCar
if (familySize <= 4 && plannedDistanceToDrive < 200){
    recCar = 'Tesla Model S'
} else if (familySize <= 4 && plannedDistanceToDrive >= 200){
    recCar = 'Toyota Camry'
} else {
    recCar = 'Minivan'
}
return recCar
}

console.log(recommendedCar(familySize, plannedDistanceToDrive))