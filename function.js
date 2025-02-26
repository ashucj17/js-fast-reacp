// function greeting(){
//     console.log("Hello")
// }
// greeting()

function addition(num1, num2){
    return num1+num2;
}
let result = addition(4,6)
// console.log(result)

function userLoggedIn(username= 'sam'){
    if(username===undefined){
        console.log("Please enter the username");
        return
    }
    else{

        return `${username} just loggedin`
    }
}
// console.log(userLoggedIn("Ashish"))

function cartItemPriceCalculator(val1, val2,...itemPrice){
    // rest operator is used to store all the values it an array/
    // firat two value is stored in val1 and val2 and remaing will stored in intemprice array
    return console.log(itemPrice)
}
// cartItemPriceCalculator(200,400,600,800);


// let user = {
//     username: "ashish",
//     salary: 120000
// }

function employeeDetailes(employee){

return `User name is ${employee.username} and salary is ${employee.salary}`

}

console.log(employeeDetailes({username: "Ashish",
    salary: 150000
}))


let myArray = [300,500,700,900];

function myThirdValue(arrayValue){
    return arrayValue[2]
}
console.log(myThirdValue([22,33,44,55,66]));