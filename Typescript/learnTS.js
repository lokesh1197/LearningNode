var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var Student = /** @class */ (function () {
    function Student(firstname, middlename, lastname) {
        this.firstname = firstname;
        this.middlename = middlename;
        this.lastname = lastname;
        this.fullname = firstname + " " + middlename + " " + lastname;
    }
    return Student;
}());
function greet(person) {
    return "Hello, " + person.firstname + " " + person.lastname;
}
function greeter(name) {
    return "Hello " + name;
}
var myFunc;
myFunc = function (src, sub) {
    return true;
};
// class Clock implements SomeClass {
//   time: Date = new Date();
//   setTime(d: Date) {}
//   constructor(h: number, m: number) {};
// }
var Clock = /** @class */ (function () {
    function Clock(h, min) {
        this.time = new Date();
    }
    Clock.prototype.setTime = function (d) { };
    ;
    return Clock;
}());
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
var Control = /** @class */ (function () {
    function Control() {
    }
    return Control;
}());
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.select = function () { };
    return Button;
}(Control));
var TextBox = /** @class */ (function (_super) {
    __extends(TextBox, _super);
    function TextBox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextBox.prototype.select = function () { };
    return TextBox;
}(Control));
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
var a = [1, 2, 3, 4, 5];
var ro = a;
var b = ro; // this makes ro writable
b.push(7);
console.log(ro);
console.log(b);
// Spread
var list = { "fruit": "mango", "vegetable": "Bottle Guard", "drink": "water" };
var listClone = __assign({}, list); // The spread operator clones by value not reference
listClone["fruit"] = "Orange";
console.log(listClone);
console.log(list);
var user = "Lokesh";
var userNo = 1234;
var student = new Student("Lokesh", "", "Mohanty");
console.log(student);
console.log(greeter(user));
// console.log(greeter(userNo)); // Returns error
console.log(greet({ firstname: "Lokesh", lastname: "Mohanty" }));
