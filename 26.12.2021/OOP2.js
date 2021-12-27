// function fib(n){
//     if (n <= 1)
//         return 1;
//     else
//         console.log(n)
//         return fib(n - 1) + fib(n - 2);
// }
// console.log(fib(4));

// 4 -> fib(3) + fib(2).1
// fib(3) -> 3 -> fib(2).2 + fib(1).1
// fib(2).1 -> 2 -> fib(1).2 + fib(0).1
// fib(2).2 -> 2 -> fib(1).3 + fib(0).2
// fib(1).1 -> return 1;
// fib(1).2 -> return 1;
// fib(0).1 -> return 1;
// fib(1).3 -> return 1;
// fib(0).2 -> return 1;
// Answer is 5 


// function fact(n) {
    
//     if (n <= 1) // base case
//         return 1;
//     else    
//         console.log(n)
//         return n*fact(n-1);    
// }
// console.log(fact(4));

//fact(4)-> 4 * fact(3) -> 4*3 * fact(2)-> ...
// answer is 24

let countdownTime = (count) => {
    if (count === 0) { 				// base case
        console.log("Stop");
    }
    else {
            console.log(count);
            countdownTime(count-1); //recursive call on a reduced problem countdownTime-1
        }
}
    
countdownTime(4);
    