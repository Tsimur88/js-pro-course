function Car (name, model, year, color, maxSpeed, fuelCapacity, fuelConsumption) {
    this.name = name;
    this.model = model;
    this.year = year;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.fuelCapacity = fuelCapacity || 60;
    this.fuelConsumption = fuelConsumption || 10; 
}
var сurrentYear = new Date().getFullYear();

Car.prototype.getFullName = function () {
    console.log(this.name + " " + this.model);
}
var fullName = new Car("Mazda", 6);
fullName.getFullName();

Car.prototype.getAge = function () {
    console.log(сurrentYear - this.year);
}
var age = new Car ("Mazda", 6, 2010);
age.getAge();

Car.prototype.changeColor = function (color) {
    if (color = this.color) {
        alert("Такой цвет уже существует")
    }
    else {
        alert( "Цвет был изменён");
      }
}
var changeColor = new Car("green");
changeColor.changeColor();

Car.prototype.calculateWay = function (kilometers, fuel) {
    if (fuel < 10) {
        alert ("You have to refuel");
    }
}