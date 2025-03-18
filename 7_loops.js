//  Maps

let myNumbers= [0,1,2,3,4,5,6,7,8,9]

let newNum = myNumbers.map( (num) => num*10).map( (num)=> num+1).filter( (num) =>num>=40)
console.log(newNum)