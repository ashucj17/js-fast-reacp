// primitive

// number, string, boolean, null, undefined,symbol, bigInt


let num =7;

// console.log(typeof num)

let some = "Ashish";
// console.log(typeof some)

// Reference or non premitive

//  arrary,objects, function

// data type of all the non-premitive datatype is object, function returns function as data type it called as object function

let arr = [7,5,6,9,8,]

// console.log(typeof arr);

let emp = {
    Name: "ashish",
    email: "ashu@gmail.com",
    address: "SQM"
}

console.log(typeof "Name")

let myfunction = function(){
    // console.log("hollo world")
}

// console.log(typeof myfunction)

//===================================

// memory stack

let myChannel = "Codingduniya"

let anotherChannel = myChannel;
anotherChannel= "Codingverse"

// console.log(myChannel)
// console.log(anotherChannel)

//heap memory


let userOne ={
    Name: "Ashish",
    Email: "ashish@google.com"
}

let userTwo = userOne;
userTwo.Email= "ashu@amazon.com"

console.log(userOne)
console.log(userTwo)