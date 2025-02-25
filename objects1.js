// Singleton = when object is created by constructor
// object.create

let mySym = Symbol('key1');


let jsUser = {
    name: "Ashish",
    "full name": "Ashish Kumar",
    [mySym]: 'key1',
    age:31,
    email: "ashu17@gmail.com",
    address: "Kanpur",
    isLoggedIn: false,
    userLoggedInDays: ["Monday","Tuesday"]

}
// console.log(jsUser.email)
// console.log(jsUser['age'])

// console.log(jsUser['full name'])
// console.log(jsUser[mySym]) // to access the symbol we ahev to add key in square barckets

// jsUser.email = 'ashish@google.com'
// Object.freeze(jsUser)
// jsUser.email= 'ashish.yahoo.com'
// console.log(jsUser)

jsUser.greeting= function(){
    console.log("hello everyone")
}
jsUser.greeting()
// console.log(jsUser.greeting());

// jsUser.greeting2= function(){
// console.log(`Hello Js user, ${this["full name"]}`)
// }
// console.log(jsUser.greeting2())

//  the undefined appears because the fgreeting() function dosent return any value it only logs to the console.