// area of square, rectangle and circle

function squareArea(side) {
    return side * side;
}

function rectangleArea(length, breadth) {
    return length * breadth;
}

function circleArea(radius) {
    return Math.PI * radius * radius;
}

module.exports = {
    squareArea,
    rectangleArea,
    circleArea,
}