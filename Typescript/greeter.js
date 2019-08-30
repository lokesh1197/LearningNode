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
var user = "Lokesh";
var userNo = 1234;
var student = new Student("Lokesh", "", "Mohanty");
console.log(student);
console.log(greeter(user));
console.log(greeter(userNo));
console.log(greet({ firstname: "Lokesh", lastname: "Mohanty" }));
