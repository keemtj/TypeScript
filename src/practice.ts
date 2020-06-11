// interface Person {
type Person = {
  name: string;
  age?: number;
};

type Developer = Person & {
  // interface Developer extends Person {
  // name: string;
  // age?: number;
  skills: string[];
};
const person: Person = {
  name: "김사람",
  age: 20,
};

const expert: Developer = {
  name: "김개발",
  skills: ["javascript", "react", "typescript"],
};

type People = Person[];
const people: People = [person, expert];

type Color = "red" | "orange" | "yellow";
const color: Color = "orange";
