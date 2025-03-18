//  for of loop

let greatings  = "Hello world!"
for (const great of greatings) {
    // console.log(`letter is ${great}`)
}

//  map: it prints in unique key or value in the given order and ignores the duplicates. for of wont work on objects.

// map is not irretratble

let map = new Map()

map.set('IN',"India")
map.set('EN',"England")
map.set('USA',"United States Of America")
map.set('FR',"France")

for (const [Key, Value] of map) {
    console.log(`${Key} => ${Value}`)
}