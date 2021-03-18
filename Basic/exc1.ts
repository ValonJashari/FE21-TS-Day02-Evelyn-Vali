/* Create a class constructor named Person that should hold information 
about name, age,  jobTitle and have a function that will 
 return a string “Hello there, My name is (name) and I am (age) years old,
  and I am a (jobTitle)” */
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
    name1(){
        return `“Hello there, My name is ${this.name} and I am ${this.age} years old,
        and I am a ${this.jobTitle}, I work in ${this.location} and I done a course at ${this.course}`;
        
    }
    
    
}
let person1 = new Person("Basic1", 25, "Junior_Web_Developer", "Vienna", "Code Factory Wien");
console.log(person1.name1());

