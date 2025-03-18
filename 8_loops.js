// reduce: it take two valu 1. accumulator 2. current value

// let values = [1,2,3]

// let myTotal = values.reduce((accumulator, currentValue) => {
//     console.log(`accumulator: ${accumulator} and currentValue ${currentValue}`);
//     return accumulator + currentValue;
// },0)

// console.log(myTotal)

const courses = [
    {
      courseName: "JavaScript for Beginners",
      price: 49.99
    },
    {
      courseName: "Advanced React Development",
      price: 99.99
    },
    {
      courseName: "Python Data Science Masterclass",
      price: 79.99
    },
    {
      courseName: "Full-Stack Web Development",
      price: 149.99
    }
  ];

  let priceToPay = courses.reduce( (acc, items)=> {
    console.log(`accumulator: ${acc} and price: ${items.price}`)
    return acc + items.price
  },0)

  console.log(`${priceToPay}`)