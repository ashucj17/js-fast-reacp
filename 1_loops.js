// for  


// for (let i=0; i<=10;i++){
//     let num= i;
//     if(num==5){
//         console.log("We have reached half way")
//     }
//     console.log(num)
// }

for(i=0;i<=10;i++){
    console.log(`Outer loop ${i}`)
    for(j=0;j<=10;j++){

        // console.log(`Inner loop ${j}`)
        console.log(`${i} * ${j} = ${i*j}`)
    }
    
}