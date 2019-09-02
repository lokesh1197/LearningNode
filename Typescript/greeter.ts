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

let user = "Lokesh";
let userNo = 1234;
let student = new Student("Lokesh", "", "Mohanty");

console.log(student);
console.log(greeter(user));
// console.log(greeter(userNo)); // Returns error
console.log(greet({firstname: "Lokesh", lastname: "Mohanty"}));
