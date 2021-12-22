class Rectangle {
    length;
    width;
    area;
    perimeter;
    constructor(length, width,area,perimeter) {
        this.length = length;
        this.width = width;
        this.area = area;
        this.perimeter = perimeter;
    }

    getLength() {
        return this.length;
    }

    getWidth() {
        return this.width;
    }

    getArea() {
        return this.area;
    }

    getPerimeter() {
        return this.perimeter;
    }
}