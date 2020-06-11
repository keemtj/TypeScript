interface Shape {
  getArea(): number;
}

class Circle implements Shape {
  // radius: number;

  // constructor(radius: number) {
  //   this.radius = radius;
  // }

  constructor(public radius: number) {}

  getArea() {
    return this.radius * this.radius * Math.PI;
  }
}

class Rectangle implements Shape {
  // width: number;
  // height: number;
  // constructor(width: number, height: number) {
  //   this.width = width;
  //   this.height = height;
  // }

  constructor(private width: number, private height: number) {}

  getArea() {
    return this.width * this.height;
  }
}

const circle: Circle = new Circle(5);
const rectangle: Rectangle = new Rectangle(2, 5);

function getCircleArea(circle: Circle) {
  return circle.getArea();
}

const shapes: Shape[] = [circle, rectangle];

shapes.forEach((shape) => {
  console.log(shape.getArea());
});
