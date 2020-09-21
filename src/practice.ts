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
