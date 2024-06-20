class Rectangle {
  constructor(name, height, width) {
    // console.log('Always Runs...');
    this.name = name;
    this.height = height;
    this.width = width;
  }

  area() {
    return this.height * this.width;
  }

  perimeter() {
    return 2 * (this.height + this.width);
  }

  isSquare() {
    return this.height === this.width;
  }

  logArea() {
    console.log(`Rectangle Area is: ${this.area()}`);
  }
}

const square = new Rectangle('Square', 20, 20);
console.log(square);

// Prints the prototype of square object.
console.log(Object.getPrototypeOf(square));
console.log(square.area());
console.log(square.perimeter());
console.log(square.isSquare());
square.logArea();
