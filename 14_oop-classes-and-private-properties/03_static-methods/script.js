class Rectangle {
  constructor(name, height, width) {
    this.name = name;
    this.height = height;
    this.width = width;
  }

  area() {
    return this.height * this.width;
  }

  // Static methods are class level methods which can be called with class name
  // and remains same for all the objects of Rectangle class.
  // We can't call static method by using object instantiation in JavaScript. It
  // must be called with class name.
  static getClass() {
    return 'Rectangle';
  }
}

const rect = new Rectangle('Rect', 10, 10);
console.log(rect.area());
console.log(Rectangle.getClass());
