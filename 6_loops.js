//  foreach not returns any value

// let nums = [1,2,3,4,5,6,7,8,9,10]

// let myNums = nums.forEach( (items) => {
    // // console.log(items)
    // return items
    // })
    // console.log(myNums)


    // let myNums = [1,2,3,4,5,6,7,8,9,10];

    // let newNum = myNums.filter( (num) => {
        //     return num4
        // })
        // console.log(newNum)

        // let myNums = [1,2,3,4,5,6,7,8,9,10];

        // let newNum= []

        // myNums.forEach( (num) => {
        //     if(num > 4)
        //         newNum.push(num)
        // })
        // console.log(newNum)

        const books = [
            {
              name: "The Great Gatsby",
              genre: "Fiction",
              publish: 1925,
              edition: "First",
            },
            {
              name: "To Kill a Mockingbird",
              genre: "Classic",
              publish: 1960,
              edition: "First",
            },
            {
              name: "1984",
              genre: "Dystopian",
              publish: 1949,
              edition: "First",
            },
            {
              name: "The Catcher in the Rye",
              genre: "Fiction",
              publish: 1951,
              edition: "First",
            },
            {
              name: "Pride and Prejudice",
              genre: "Romance",
              publish: 1813,
              edition: "Second",
            },
            {
              name: "The Hobbit",
              genre: "Fantasy",
              publish: 1937,
              edition: "First",
            },
            {
              name: "Moby-Dick",
              genre: "Adventure",
              publish: 1851,
              edition: "First",
            },
            {
              name: "War and Peace",
              genre: "Historical Fiction",
              publish: 1869,
              edition: "Third",
            },
            {
              name: "The Alchemist",
              genre: "Philosophical",
              publish: 1988,
              edition: "Second",
            },
            {
              name: "The Da Vinci Code",
              genre: "Thriller",
              publish: 2003,
              edition: "First",
            }
          ];

          let userBooks = books.filter( (bk) => bk.genre === 'Fiction')

          userBooks = books.filter( (bk) => bk.publish >= 1950 && bk.genre ==="Thriller")
          console.log(userBooks)