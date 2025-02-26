let a =10;
const b=20;
// var c = 300;
// console.log(c)
if(true)
    {
        // var c= 30;
        let a =10;
        // console.log('Inner:',a);

    }

// console.log(a)
// console.log(b)
// console.log(c)

// var have the global scope and let and const have the block scope


function one(){
    let myName= "Ashish";
    function two(){
        let myWebsite= "vertex360.com"
        // console.log(myName)
    }
    // console.log(myWebsite)
    two()

}
one()


if(true){
    let myName="Ashish";
    if(myName==="Ashish"){
        let myWebsite = ' vertex360.com'
        // console.log(`${myName}${myWebsite}`)
    }
    // console.log(myWebsite) // out of the scope inner if block
}
// console.log(myName) // out of the scope of the outer if block


// console.log(addOne(9))
function  addOne(num){
    return num +1;
}



addTwo()  // in this senarion the function stored in a variable (function expression) cannot access before the initialization
let addTwo = function(num) {
    return num +2
}