let myDate = new Date();

// console.log(myDate)
// console.log(myDate.toString());
// console.log(myDate.toDateString());

// console.log(myDate.toLocaleString());
// console.log(typeof myDate)

// let myCreatedDate = new Date(2025,2,20);
// let myCreatedDate = new Date(2025,2,20,5,3);
// let myCreatedDate = new Date("2025-01-14");
let myCreatedDate = new Date("2-02-2025");
// console.log(myCreatedDate.toLocaleString())


let myTimeStamp= Date.now();

// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())
// console.log(Math.floor(Date.now()/1000))

let newDate = new Date();
// console.log(newDate.getDate())
// console.log(newDate.getDay())
// console.log(newDate.getHours())
// console.log(newDate.getMonth()+1);

newDate.toLocaleString('defalut',{
    weekday:"long",
})

console.log(newDate)