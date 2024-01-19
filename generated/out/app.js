"use strict";
console.log('Hi');
let aString = "Hi";
let aNum;
aNum = 10;
let aBool = true;
aBool = false;
let anyVar = "a string";
anyVar = 5;
let year;
year = 2021;
year = "2021";
const parsedYear = parseInt(year);
let arrString = ['a', 'b', 'c'];
let arrNumber = [1, 2, 3];
let arrBool = [true, false];
let arrMix = [1, "a", true];
let arrTup = ["a string", 5];
let person = {
    name: "jesse",
    age: 25
};
let date;
let calcSum;
calcSum = (first, second) => { return first + second; };
calcSum(2, 2, 2);
const sayHi = () => { console.log('Hi'); };
let mike = {
    name: "mike",
    age: 34,
};
const inputName = document.querySelector('#age');
const inputAge = document.querySelector('#name');
const inputForm = document.querySelector('form');
inputName.value;
const greeting = document.querySelector("greeting");
class Person {
    constructor(n, a) {
        this.name = n;
        this.age = a;
    }
    greet() {
        return `Hi, my nmane is ${this.name}and I am ${this.age}`;
    }
}
let john = new Person("John", 35);
console.log(john.greet());
inputForm.addeventListener("submit", (e) => {
    e.preventDefault();
    const person = new Person(inputName.value, inputAge.valueAsNumber);
    greeting.innerText = person.greet();
    inputForm.reset();
});
//# sourceMappingURL=app.js.map