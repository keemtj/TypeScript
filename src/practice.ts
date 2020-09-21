// ! 기본 타입 및 함수
const message: string = "hello world";
console.log(message);
// let count:number = 0; 의 number를 생략해도 type이 number로 지정된다
let count = 0;
count += 1;
// count = "string";

const msg: string = "hello world";
const done: boolean = false;

const number: number[] = [1, 2, 3];
const msgs: string[] = ["hello", "world"];

// msgs는 string[]인데 number를 넣으면 에러
// msgs.push(1);
// 어떤 특정값이 undefined일수도 있고 string일 수도 있을 때 | 을 넣어주어 명시
let mightBeUndefined: string | undefined = undefined;
let nullableNumber: number | null = null;

let color: "red" | "orange" | "yellow" = "red";
color = "yellow";
// color = "green";

// param의 type을 빠트리게 되면 기본적으로 any라고 설정되지만 빨간 줄이 그어진다
// any라고 명시해주어도 되지만 number로 타입을 설정
// function의 결과물에 대한 타입도 정해줄 수 있다
function sum(x: number, y: number): number {
  // return "string";
  return x + y;
}
const result = sum(1, 2);

function sumArray(numbers: number[]): number {
  return numbers.reduce((acc, cur) => acc + cur, 0);
}

const total = sumArray([1, 2, 3, 4, 5]);
console.log(total);

// 함수에서 아무것도 return하지 않는다면 void로 설정되어져 있다
function returnNothing() {
  console.log("blabla");
  // return true;
}

returnNothing();

// return의 타입을 void로 명시하였을 때 void가 아니면 에러
function returnNothingTwo(): void {
  // return true;
}

returnNothingTwo();

// return이 string | number
function returnStringOrNumber(): string | number {
  return 4;
  // return 'string';
}

// ! interface, type alias
// ! class
interface Shape {
  // Shape이라는 interface는 getArea()라는 함수가 있어야하고
  // 그 함수의 결과물은 number타입이다
  getArea(): number;
}

// public, private이 들어간 ts파일을 컴파일한 js파일에서는 다 나타나게 된다
// 즉, typescript 내부에서만 유효한 속성이다
class Circle implements Shape {
  // radius: number;

  // public: 인스턴스에서 radius 변수를 조회할 수 있다
  constructor(public radius: number) {
    // this.radius = radius;
  }
  // Circle 클래스가 Shape interface의 내용을 충족하지 않으면 빨간줄이 그어진다
  getArea() {
    return this.radius * this.radius * Math.PI;
  }
}

class Rectangle implements Shape {
  // width: number;
  // height: number;

  // private: 인스턴스에서 width, height 변수를 조회할 수 없다
  constructor(private width: number, private height: number) {
    // this.width = width;
    // this.height = height;
  }
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

// 중복되는 코드는 상속을 통해 중복을 제거할 수 있다
// ! object, type alias
// type alias를 사용하여도 표현할 수 있다
// interface Person {
type Person = {
  name: string;
  // ? 는 age라는 interface가 있을수도 있고 없을 수도 있다
  age?: number;
};
// Developer는 Person을 상속받는다
// interface Developer extends Person {
// Person & {}는 extends Person과 같은 표현
type Developer = Person & {
  // name: string;
  // age?: number;
  skills: string[];
};

const person: Person = {
  name: "김사람",
  age: 20,
  // Person interface에 skills가 없기 때문에 에러
  // skills: ["javascript"],
};
const expert: Developer = {
  name: "김개발",
  skills: ["javascript", "react", "typescript"],
};

// type alias를 사용하면 interface로 못하는 것들을 몇가지 할 수 있다
type PeopleGroupOne = Developer[];
type PeopleGroupTwo = Person[];
// const peopleGroupOne: PeopleGroupOne = [person, expert];
const peopleGroupTwo: PeopleGroupTwo = [person, expert];

type Color = "red" | "orange" | "yellow";
const selectColor: Color = "orange";

// Queue(FIFO)
class Queue<T> {
  list: T[] = [];

  get length() {
    return this.list.length;
  }

  enqueue(item: T) {
    this.list.push(item);
  }

  dequeue() {
    return this.list.shift();
  }
}

const queue = new Queue<number>();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);

while (queue.length > 0) {
  console.log(queue.dequeue());
}
