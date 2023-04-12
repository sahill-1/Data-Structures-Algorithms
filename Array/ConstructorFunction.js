// Constructor Function
// How to use them

// let student1 = {
//     firstName : "Sahil",
//     lastName : "Vishwakarma",
//     age : 25,
//     job : "Frontend Developer"
// }

// Object Constructor

function Student(first, last, age, job){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.job = job;
}

let student1 = new Student("Sahil", "Vishwakarma", 25, "Frontend Developer");
let student2 = new Student("Nitin", "Meena", 25, "Backend")
student1.nationality = "Indian"
student1.name = function (){
    return this.firstName + " " +this.lastName;
}
Student.prototype.nationality = "Indian"


console.log(student2);