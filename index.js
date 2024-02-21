let car = {
    mark: "BMW",
    model: "m5 f90",
    year: 2022,
    detailes() {
        return "Данные об авто" + this.mark + " " + this.model + " " + this.year
    },
};

console.log(car.detailes());

// let carInfo = Object.values(car)
// console.log(carInfo);

// let carInfo = Object.keys(car)
// console.log(carInfo);

