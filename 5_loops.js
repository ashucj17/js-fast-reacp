// forEach

let coding = ['js',"c++",'c','python','react'];

// using normal function
// coding.forEach(function (value){
//     console.log(value)
// })

//  using arrow function

// coding.forEach((index)=>{
//     console.log(index)
// })

// function printing(item){
//     console.log(item)
// }
// coding.forEach(printing)

// coding.forEach((item, index, arr)=>{
// console.log(item, index, arr)
// })

let myCoding = [{
    Lname: "Javascript",
    LFileName: "js"
},{
    Lname: "Javascript",
    LFileName: "js"
},{
    Lname: "Javascript",
    LFileName: "js"
},{
    Lname: "Javascript",
    LFileName: "js"
},{
    Lname: "Javascript",
    LFileName: "js"
}]

myCoding.forEach((item)=>{
    console.log(item.LFileName)
})