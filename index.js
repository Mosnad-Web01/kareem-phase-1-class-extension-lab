// Your code here
class Polygon {
    constructor(sides) {
        this.sides = sides
    }

    get countSides() {
        return this.sides.length 
    }

    get perimeter() {   
        return this.sides.reduce((a, b) => a + b, 0)  
    }
}


class Triangle extends Polygon { 
    constructor(sides) {
        super(sides) 
    }

    get area() { 
        let s = this.perimeter / 2;
        return Math.sqrt(s * (s - this.sides[0]) * (s - this.sides[1]) * (s - this.sides[2]));
    }

    get isValid() { 
        if (this.sides[0] + this.sides[1] < this.sides[2] || this.sides[1] + this.sides[2] < this.sides[0] || this.sides[0] + this.sides[2] < this.sides[1]) {
            return false
        } else {
            return true
        }
    }
}

class Square extends Polygon { 
    constructor(sides) {
        super(sides) 
    }

    get area() {
        return this.sides[0] * this.sides[0]
    }

    get countSides() {
        return 4
    }

    get perimeter() {
        return this.sides[0] * 4;
    }

    get isValid() {
        if (this.sides[0] === this.sides[1] && this.sides[1] === this.sides[2] && this.sides[2] === this.sides[3]) {
            return true
        } else {
            return false;
        }
    }
}