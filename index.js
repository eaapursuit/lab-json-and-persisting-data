// store will have cars to purchase online
const { faker } = require("@faker-js/faker");
const { nanoid } = require("nanoid");
const fs = require("fs");
const listOfCars = require("./data/carData.json")


function generateSingleCar (data) {
  const itemId = nanoid();
  const carMake = faker.vehicle.manufacturer();
  const carModel = faker.vehicle.model();
  const carYear = faker.datatype.number({ min: 1970, max: 2023 });
  const previousOwner = faker.datatype.boolean();

  listOfCars.push({itemId, carMake, carModel, carYear, previousOwner})
  saveListOfCars()
return listOfCars;
}


function generateMultipleCars (data) {
for(let i = 0; i < data; i++){

  const itemId = nanoid();
  const carMake = faker.vehicle.manufacturer();
  const carModel = faker.vehicle.model();
  const carYear = faker.datatype.number({ min: 1970, max: 2023 });
  const previousOwner = faker.datatype.boolean();

  listOfCars.push({itemId, carMake, carModel, carYear, previousOwner})

  
}

saveListOfCars()
return listOfCars;
}

function saveListOfCars(){
  const stringifiedData = JSON.stringify(listOfCars, null, 3)
  fs.writeFileSync("./data/carData.json", stringifiedData)
}
const data = process.argv[2] || 100

generateSingleCar()
generateMultipleCars()


module.exports = { generateSingleCar, generateMultipleCars }