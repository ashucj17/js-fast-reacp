// Immediately Invoked Function Expression(IIFE)
//  The function define and execute immediately after its creation to avoide the global scope variable namespase. Here we can wrap a function this parentheses.

(function random (){
    console.log('Sorted call');
})();


((name)=>{
    console.log(`Sorted call for ${name}`);
})("Ashish")