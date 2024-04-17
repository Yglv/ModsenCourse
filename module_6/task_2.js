class Rectangle {
  constructor (length, width) {
    this.length = length;
    this.width = width;
  }

  getPerimeter() {
    return (this.length + this.width) * 2;  
  }

  getSquare() {
    return this.length * this.width;
  }
}

let rect = new Rectangle(4, 5);
console.log(rect.getPerimeter());
console.log(rect.getSquare());