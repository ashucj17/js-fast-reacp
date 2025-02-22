let indianHero = ['shaktimann', 'Krish', 'Ra-One' ]

let foreginHero = ['Heman', 'Sentinal', 'Mercury']

// indianHero.push(foreginHero) // change the original array
// console.log(indianHero)

indianHero.concat(foreginHero) // creats a refference
// console.log(indianHero)

// let heroVerse =  indianHero.concat(foreginHero)
// console.log(heroVerse)

let allHero = [...indianHero, ...foreginHero]
// spread operator (...)
// console.log(allHero)


// let myName= ['Ashish']

// let speadName = [...myName]
// console.log(speadName)

console.log(Array.isArray("Ashish"))
console.log(Array.from("Ashish"))
console.log(Array.from({name:"Ashish"}))

let s1=120;
let s2=220;
let s3=320;
 
// adding variable in an array
console.log(Array.of(s1,s2,s3));

 
