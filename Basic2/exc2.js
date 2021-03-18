var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/* Create a class based on the Person class and add some other properties like salary, jobLocation and a function that will call the function that is inside the Person class and add “and I get (salary) every month, and I work in (jobLocation)” */
var Person = /** @class */ (function () {
    function Person(name, age, jobTitle, location, course) {
        this.name = "";
        this.age = "";
        this.jobTitle = "";
        this.location = "";
        this.course = "";
        this.name = name;
        this.age = age;
        this.jobTitle = jobTitle;
        this.location = location;
        this.course = course;
    }
    Person.prototype.func1 = function () {
        return "\u201CHello there, My name is " + this.name + " and I am " + this.age + " years old,\n        and I am a " + this.jobTitle + ", I live in " + this.location + " and I done a course at " + this.course;
    };
    return Person;
}());
var person1 = new Person("Basic1", 25, "Junior_Web_Developer", "Vienna", "Code Factory Wien");
//console.log(person1.func1());
var newPerson = /** @class */ (function (_super) {
    __extends(newPerson, _super);
    function newPerson(name, age, jobTitle, location, course, salary, jobLocation, language, experience) {
        var _this = _super.call(this, name, age, jobTitle, location, course) || this;
        _this.salary = salary;
        _this.jobLocation = jobLocation;
        _this.language = language;
        _this.experience = experience;
        return _this;
    }
    newPerson.prototype.func2 = function () {
        return _super.prototype.func1.call(this) + " and I get " + this.salary + " every month,I work in " + this.jobLocation + ", I speak " + this.language + " and I have " + this.experience + " years of experience ";
    };
    return newPerson;
}(Person));
var person2 = new newPerson("Basic1", 25, "Junior_Web_Developer", "Vienna", "Code Factory Wien", 5000, "Salzburg", "German and English", 5);
console.log(person2.func2());
