let singletonObject = new Object()
// when we create object using new keyword is calld as singleton object/

let myObj = {}
//  when we create object by declaring it using literals (let, var, const) is called object literals

myObj.name = "Ashish";
myObj.age = 30
myObj.address =  'kanpur';

// console.log(myObj)


let employee = {
    empId: 12341,
    empEmail: 'ashish@tcs.com',
    empFullName: {
        firstName:"Ashish",
        lastName: "Kumar"
    }
}

// console.log(employee);
// console.log(employee.empFullName);
// console.log(employee.empFullName.firstName);

let obj1 ={1:'a', 2:'b'};
let obj2={3:'A',4:'B'}

// let obj3= {obj1,obj2}; // it added the object in two different index for obj1 and obj2.
// console.log( "obj3:",obj3)

// let obj3 = Object.assign(obj1, obj2); // it also manipulates the value of obj1.
// console.log( "obj3:",obj3)
// console.log(obj3===obj1)
// console.log("obj1",obj1)

let obj3 = Object.assign({},obj1, obj2);// the empty parenthesis helps to add all the value in obj3 with making changes in other objects.
// console.log(obj3===obj1)
// console.log("obj3",obj3)
// console.log("obj1",obj1)

let spreadObject = {...obj1, ...obj2}
// console.log(spreadObject);
// merging opbject using spread operator.

let users = [
    {
    id: 1,
    email: "a@gmail.com",
},
{
    id: 1,
    email: "a@gmail.com"},
    {
        id: 1,
        email: "a@gmail.com"},
        {
            id: 1,
            email: "a@gmail.com"}
        ]
// console.log(users);

console.log(Object.keys(myObj))
console.log(Object.values(myObj))
console.log(Object.entries(myObj))
// all the above methods provides the value in array format
console.log(myObj.hasOwnProperty('address'))