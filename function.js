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
console.log(userLoggedIn("Ashish"))