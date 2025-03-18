// for in provides the keys, loop mainly work on object

let language = {
    cpp: 'c++',
    js: "Javascript",
    rb: 'Ruby',
    py: "Python"
}
for (const key in language) {
    // console.log(`${key} is for language ${language[key]}`)

}

let programming = ['js','py','c#',"cpp","java" ]

for (const key in programming) {
    console.log(programming[key])
}