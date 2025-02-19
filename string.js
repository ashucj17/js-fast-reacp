let name = "Ashish";
let age = 30;

// console.log(name + age); // Oldeer to concatinate two string


// console.log(`Hello, My name is ${name} and I am ${age} years old`);


let getName = new String("Ashish")
// console.log(getName[0])
// console.log(getName.__proto__)

// console.log(getName.length)
// console.log(getName.toLocaleUpperCase())
// console.log(getName.indexOf('h'))
// console.log(getName.charAt(5))

// let newString = getName.substring(0,4)
// console.log(newString)

// console.log(getName.slice(1,4))

let newString = "   Ashish  ";
console.log(newString);
console.log(newString.trim());

let url = "https://ashish.com/ashish%20agnihotri"

console.log(url.replace('%20', '-'))
console.log(url.includes('handsome'))

let anotherName= "ashish-agni-17"
console.log(anotherName.split('-'))