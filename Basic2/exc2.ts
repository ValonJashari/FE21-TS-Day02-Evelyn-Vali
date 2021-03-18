/* Create a class based on the Person class and add some other properties like salary, jobLocation and a function that will call the function that is inside the Person class and add “and I get (salary) every month, and I work in (jobLocation)” */
  class Person{
    name = "";
    age="";
    jobTitle="";
    location="";
    course="";

    constructor(name, age, jobTitle, location, course)
    {
        this.name = name;
        this.age = age;
        this.jobTitle=jobTitle;
        this.location=location;
        this.course=course;
    }
    func1(){
        return `“Hello there, My name is ${this.name} and I am ${this.age} years old,
        and I am a ${this.jobTitle}, I live in ${this.location} and I done a course at ${this.course}`;
        
    }
    
    
}
let person1 = new Person("Basic1", 25, "Junior_Web_Developer", "Vienna", "Code Factory Wien");
//console.log(person1.func1());

class newPerson extends Person
{
    salary;
    jobLocation;
    language;
    experience;

    constructor(name, age, jobTitle, location, course, salary, jobLocation, language, experience)
    {
            super(name, age, jobTitle, location, course);
            this.salary=salary;
            this.jobLocation=jobLocation;
            this.language=language;
            this.experience=experience;

    }
    func2(){
        return `${super.func1()} and I get ${this.salary} every month,I work in ${this.jobLocation}, I speak ${this.language} and I have ${this.experience} years of experience `
    }
}
let person2 = new newPerson("Basic1", 25, "Junior_Web_Developer", "Vienna", "Code Factory Wien",5000, "Salzburg","German and English", 5);
console.log(person2.func2());
