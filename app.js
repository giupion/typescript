console.log('Hi');
//not possible a String come java
let aString = "Hi";
//let aNum=5;
//aNum="dhfhfh"
let aNum;
aNum = 10;
let aBool = true;
aBool = false;
//esplicitamente possiamo decidere sia any type
let anyVar = "a string";
anyVar = 5;
//|schift e pipe
let year;
//union
year = 2021;
year = "2021";
const parsedYear = parseInt(year);
//let arrstring=['a','b','c']
let arrString = ['a', 'b', 'c'];
//arrString.push(1)//non possimao pushare u nnumero in un array di stringhe
let arrNumber = [1, 2, 3];
let arrBool = [true, false];
let arrMix = [1, "a", true];
//possimao pushare tutto tra string number e boolean
//indice uno deve essere na stringa e il due un numero negli indici 0 string e 1 number
let arrTup = ["a string", 5];
//cosi codice manutenibile sclabile cioè puo aumentare e diminuire le proprie prestazioni
//arrTup=[4,"t"]
let person = {
    name: "jesse",
    age: 25
};
let date;
/*function calcSum(a:number,b:number){
    return a+b;
}
calcSum(2,2)*/
let calcSum;
//funzione che accetta due paramentri numbers e ritorna un numero
calcSum = (first, second) => { return first + second; };
//se togli il retunr ritorna void type
calcSum(2, 2, 2);
const sayHi = () => { console.log('Hi'); };
let mike = {
    name: "mike",
    age: 34, //ha tutti i tipi di person interface quindi yell! si incazza perchè vuole il tipo number
};
//fa il check per vedere se il form è li
class Person {
    constructor(n, a) {
        this.name = n; //si riferisce a person name
        this.age = a;
    }
    //qui accede a name perche è dentro la classe
    greet() {
        return `Hi, my nmane is ${this.name}and I am ${this.age}`;
    }
}
let john = new Person("John", 35);
console.log(john.greet()); //name privato non posso accedere dall'oggetto
const inputName = document.querySelector('#name'); //per fargli capire che si trova il nodo sull'html typecasting per gli id si fa
const inputAge = document.querySelector('#age'); //per fargli capire che si trova il nodo sull'html
const inputForm = document.querySelector('form'); // form tag e typescript sa che è un form non c'e bisogno id typecasting ! oppure per far capire che il form è li a typescritp
const greeting = document.querySelector(".greeting");
inputForm === null || inputForm === void 0 ? void 0 : inputForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const person = new Person(inputName.value, inputAge.valueAsNumber);
    greeting.innerText = person.greet();
    inputForm.reset();
    //siccome abbiamo messo htmlasdiveleemtn in greeting class lo riconosce innertext
});
//quando passiamo un numero o una stringa 
function doSomething(arg) {
    return arg;
}
//doSomething(<string>('3')5) //generics fallisce se metto la string e metto numero
//si perde info su cosa ritornainfo prima della trasformazione e dell'accetazione di anu
//ci consente di acquisire il tipo fornito dall'utenteper usare info dopo
//rendere una funzione piu generica mantenere troppe tipi non conviene quindi si usa generics
var ManufacturMake;
(function (ManufacturMake) {
    ManufacturMake[ManufacturMake["TESLA"] = 0] = "TESLA";
    ManufacturMake[ManufacturMake["AUDI"] = 1] = "AUDI";
    ManufacturMake[ManufacturMake["VOLVO"] = 2] = "VOLVO";
})(ManufacturMake || (ManufacturMake = {}));
const myCar = {
    year: 2021,
    make: ManufacturMake.VOLVO,
};
console.log(myCar.make);
//trasfomrare e assignare un nome descrittivo ad un numero
