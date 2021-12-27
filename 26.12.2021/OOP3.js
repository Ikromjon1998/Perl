const foo = function() {
    console.log("Hello world!");
}

// Invoke it using the variable
foo();

const foo1 = function greetWorld() {
 console.log("Hello world!");
}

// Invoke it using the variable
foo1();

let obj = { 
greetWorld : function(){
      console.log("Hello world!");
 } 
}
// Invoke
obj.greetWorld(); // Hello world!
 

let arr = [ function greetWorld(){ console.log("Hello world!"); }];
// Invoke
arr[0](); // Hello world!


function greet(){
return function (){
     console.log('Hi Ranjit!');
 }
}
greet()(); // Hi Ranjit!
