/* Create a class constructor named Person that should hold information
about name, age,  jobTitle and have a function that will
 return a string “Hello there, My name is (name) and I am (age) years old,
  and I am a (jobTitle)” */
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
    Person.prototype.name1 = function () {
        return "\u201CHello there, My name is " + this.name + " and I am " + this.age + " years old,\n        and I am a " + this.jobTitle + ", I work in " + this.location + " and I done a course at " + this.course;
    };
    return Person;
}());
var person1 = new Person("Basic1", 25, "Junior_Web_Developer", "Vienna", "Code Factory Wien");
console.log(person1.name1());
