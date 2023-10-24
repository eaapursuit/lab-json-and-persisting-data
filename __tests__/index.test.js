const { generateSingleCar, generateMultipleCars } = require("../index.js");

const listOfCars = require("../data/carData.json");

describe("generateSingleCar()", () => {
  it("generates a list containing a single car Id, make, model, year and proof a previous owner", () => {
    const car = generateSingleCar(1);

    expect(car[car.length - 1]).toHaveProperty("itemId");
    expect(car[car.length - 1]).toHaveProperty("carMake");
    expect(car[car.length - 1]).toHaveProperty("carModel");
    expect(car[car.length - 1]).toHaveProperty("carYear");
    expect(car[car.length - 1]).toHaveProperty("previousOwner");
  });
});

describe("generateMultipleCars()", () => {
  it("generates a list containing multiple car Id's, makes, models, years and proof a previous owner", () => {
    const cars = generateMultipleCars();

    for (let i = 0; i < cars.length; i++) {
      expect(cars[i]).toHaveProperty("itemId");
      expect(cars[i]).toHaveProperty("carMake");
      expect(cars[i]).toHaveProperty("carModel");
      expect(cars[i]).toHaveProperty("carYear");
      expect(cars[i]).toHaveProperty("previousOwner");
    }
  });
});
