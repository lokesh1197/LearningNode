var _a;
class Student {
    constructor(firstname, middlename, lastname) {
        this.firstname = firstname;
        this.middlename = middlename;
        this.lastname = lastname;
        this.fullname = firstname + " " + middlename + " " + lastname;
    }
}
function greet(person) {
    return "Hello, " + person.firstname + " " + person.lastname;
}
function greeter(name) {
    return "Hello " + name;
}
let myFunc;
myFunc = function (src, sub) {
    return true;
};
function pickRandom(x) {
    if (typeof x == "number")
        return Math.random() * x;
    if (typeof x == "object")
        return x[Math.floor(Math.random() * x.size)];
}
// class Clock implements SomeClass {
//   time: Date = new Date();
//   setTime(d: Date) {}
//   constructor(h: number, m: number, s:number) {};
// }
const Clock = (_a = class Clock {
        constructor(h, min, s) {
            this.h = h;
            this.min = min;
            this.time = new Date();
        }
        setTime(d) { }
        ;
        get zero() {
            return Clock.zero;
        }
    },
    _a.zero = 0,
    _a);
let newClock = new Clock(21, 8, 9);
console.log(newClock);
// function createClock(ctor: SomeClassConstructor, h: number, min: number, s:number): SomeClass{
//   return new ctor(h, min, s);
// }
// class Clock implements SomeClass {
//   constructor(h: number, m: number, s:number) {}
//   time: Date = new Date();
//   setTime(d:Date) {}
// }
// let newClock = createClock(Clock, 21, 8, 1);
// Interface extending Class
class Control {
}
class Button extends Control {
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
let a = [1, 2, 3, 4, 5];
let ro = a;
let b = ro; // this makes ro writable
b.push(7);
console.log(ro);
console.log(b);
// Spread
let list = { "fruit": "mango", "vegetable": "Bottle Guard", "drink": "water" };
let listClone = Object.assign({}, list); // The spread operator clones by value not reference
listClone["fruit"] = "Orange";
console.log(listClone);
console.log(list);
let user = "Lokesh";
let userNo = 1234;
let student = new Student("Lokesh", "", "Mohanty");
console.log(student);
console.log(greeter(user));
// console.log(greeter(userNo)); // Returns error
console.log(greet({ firstname: "Lokesh", lastname: "Mohanty" }));
