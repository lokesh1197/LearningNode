class Student {
  fullname: string;
  constructor(public firstname: string, public middlename: string, public lastname: string) {
    this.fullname = firstname + " " + middlename + " " + lastname;
  }
}
// 'public' automatically creates properties with the argument's name

interface Person {
  firstname: string;
  lastname: string; 
}

function greet(person: Person) {
  return "Hello, " + person.firstname + " " + person.lastname;  
}
function greeter(name: string) {
  return "Hello " + name;
}

// Defining function types
interface SomeFunc {
  (source: string, year: number): boolean;
}
let myFunc: SomeFunc;
myFunc = function(src: string, sub: number): boolean {    // type need not be mentioned again, parameter names can vary
  return true;
}


// Defining interface class
interface SomeClass {
  time: Date;
  setTime(d: Date): void;
}
interface SomeClassConstructor {
  new (hour: number, min: number);
}
// class Clock implements SomeClass {
//   time: Date = new Date();
//   setTime(d: Date) {}
//   constructor(h: number, m: number) {};
// }
const Clock: SomeClassConstructor = class Clock implements SomeClass {
  constructor(h: number, min: number) {}
  time: Date = new Date();
  setTime(d: Date) {};
};
// function createClock(ctor: SomeClassConstructor, h: number, min: number): SomeClass{
//   return new ctor(h, min);
// }
// class Clock implements SomeClass {
//   constructor(h: number, m: number) {}
//   time: Date = new Date();
//   setTime(d:Date) {}
// }
// let newClock = createClock(Clock, 21, 8);


// Interface extending Class
class Control {
    private state: any;
}
interface SelectableControl extends Control {
    select(): void;
}
class Button extends Control implements SelectableControl {
    select() { }
}
class TextBox extends Control {
    select() { }
}
// Error: Property 'state' is missing in type 'Image'.
// class Image implements SelectableControl {
//     private state: any;
//     select() { }
// }

// interface OptionalProp {
//   fruit?: string;
//   vegetagle?: string;
//   [PropName: string]: any;    // any other propname of any type can be added
// }

let a: number[] = [1, 2, 3, 4, 5];
let ro: ReadonlyArray<number> = a;
let b = ro as number[];     // this makes ro writable
b.push(7);
console.log(ro);
console.log(b);

// Spread
let list = { "fruit": "mango", "vegetable": "Bottle Guard", "drink": "water" };
let listClone = { ...list };  // The spread operator clones by value not reference
listClone["fruit"] = "Orange";
console.log(listClone);
console.log(list);

let user = "Lokesh";
let userNo = 1234;
let student = new Student("Lokesh", "", "Mohanty");

console.log(student);
console.log(greeter(user));
// console.log(greeter(userNo)); // Returns error
console.log(greet({firstname: "Lokesh", lastname: "Mohanty"}));
