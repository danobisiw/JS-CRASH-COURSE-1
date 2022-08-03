Declaring Variables
Keyword identifier/VariableName=value

var firstName="John";
let lastName="Doe";
let age=27;
let isMarried=true;
let chilledDrink=['Bright', 'Simon', 'Patrick'];
let={
    favouriteColor:"Gold",
    favouriteSports:"Soccer",
    favouriteFruit: "Apple"

};
const fullName  =firstName +" "+ lastName;//concatenation
const mySelf=`My name is ${firstName} ${lastName}`;//string interpolation


//STRINGS
let sentence =" This is a story about John Doe in Blind Spot"
console.log(sentence.length)
console.log(sentence.split("John"))
console.log(sentence.replace("John"), "Patrick")
console.log(sentence.toLowerCase())
console.log(sentence.toUpperCase())
console.log(sentence.startsWith("T"))
console.log(sentence.endsWith("Spot"))

//ARRAYS
const days=["Monday", "Tuesday","Wednesday", "Thursday"];
console.log(days.length);
days.push("Friday");
console.log(days);
console.log(days.pop())
console.log(days.shift());
console.log(days.unshift("Sunday"));

console.log(days.indexOf("Friday"));
days[0]="Sunday"; //change data in the array
console.log(days);

//OBJECT
let person={
firstName:'John',
lastName:'Doe',
age:27
}


console.log(person["firstName"]);
console.log(person.firstName);
console.log(Object.keys(person));
console.log(Object.values(person));

