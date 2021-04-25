// Shortcut for Comment - Ctrl + K + C
// Shortcut for UnComment - Ctrl + K + U
// Data Types
// String
// Integer -Number
// Bool - Boolean
// Array - 
// Object - 
// undefined -
// null -

console.log('My File Loaded');

var myString = 'Pankaj';
var myNumber = 40;
var myBoolean = true;
var myArray = [1];
var student = {
    name: 'Pankaj',
    age: 30,
    address: 'Mumbai',
    isActive: false,
};

console.log(myString, myNumber, myBoolean, myArray, student);

// Fucntion based object creation
function Student1(studentId, name) {
    this.studentId = studentId;
    this.name = name;
}
var student = new Student1(1, 'Pankaj');

console.log(student);

// Class based object creation
class Student {
    constructor(studentId, name) {
        this.studentId = studentId;
        this.name = name;
    }
}

var studentClassBasedObject = new Student(2, 'Parkar');
console.log(studentClassBasedObject);

// // JAVA / C#
// public Class A {
//     int StudentId {get; Set;}
//     string Name {get; Set;}
//     constructor(int studentId, string name) {
//         this.studentId = studentId
//         this.Name = name;
//     }
// }

// A a = new A(1, 'Test')


// Document Object Model