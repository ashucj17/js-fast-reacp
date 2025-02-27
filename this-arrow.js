let user = {
    username: "ashish",
    email: "ashish@gmail.com",

    welocmeMessage: function(){
        console.log(`${this.username}, Welcome back`)
        console.log(this)
    }
}

// user.welocmeMessage()
// user.username=  "Ashu"
// user.welocmeMessage()

// console.log(this) // in node envirenment this refers to an empty object, where as inside the browser console it refers to the window object.
// in browser window is the global object

// function lesson (){
//     let username=   "Akash"
//     console.log(this.username)
// }

// lesson()

let lesson = function  (){
        let username=   "Akash"
        console.log(this.username);
}

// lesson()

//Explicit arrow function will use return keyword and curly braces

let sum= (num1, num2)=>{
    return num1+num2;
}

// console.log(sum(5,6))

// Implicit arrow function;s defination and declaration will come in a sigle line. insted of return keyword and curly braces we use parenthesis


// let sub = (num1,num2)=>num1-num2

// let sub = (num1,num2)=>(num1-num2)

let sub = (num1,num2)=>({username: "ashish"}) // the object must be wraped with parenthesis to return the object in arrow function.
console.log(sub(9,3))