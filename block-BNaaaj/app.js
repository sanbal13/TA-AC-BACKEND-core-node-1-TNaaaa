let  {squareArea, rectangleArea, circleArea} = require('./area');

let square = squareArea(10);
let rectangle = rectangleArea(10, 20);
let circle = circleArea(10);

console.log("Area of square: " + square);
console.log("Area of rectangle: " + rectangle);
console.log("Area of circle: " + circle);