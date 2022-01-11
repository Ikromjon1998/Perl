
/////// using Promises with await

let count = 0;
const printAddr = (string) => {
    promise= new Promise((resolve) => {
        setTimeout(() =>{
            console.log(string);
            
            console.log(count);
            count ++;
            resolve(string);
        }, 2000);
    });
    return promise;
}
    
async function getAddress(){
    var first = await  printAddr("121 Worcester Rd");
    var second= await  printAddr("Fairhaven");
    var third= await  printAddr("NY 14228");
    return third;
}

getAddress().then((response)=>{
    console.log(response);//The third will be printed twice due to this
});

async function getAddressAll(){
    var [first, second, third]  =
        await  Promise.all([printAddr("121 Worcester Rd"), printAddr("Fairhaven"), printAddr("NY 14228")]);
    return third;
}

getAddressAll().then((response)=>{
    console.log(response);//The third will be printed twice due to this
});
        



///// Using Promises with acyncawait

// async function aFunc() {
//     return 11;// this becomes an implicit promise 
// }
// // Async function will always be handled with then/catch as it returns a promise.
  
// aFunc().then((result) => console.log(result)); // 10
  
// async function explicitFunc() {
//     return Promise.resolve(10); 
// }
// console.log(explicitFunc()); // shows a promise
// explicitFunc().then((result) => console.log(result)); // 10
  
// async function explicitErrFunc() {
//     return Promise.reject(new Error('This explicit promise is rejected with error!'));
// }
  
// explicitErrFunc().catch(err => console.log(err));
  



//// Promises Dummy Example

// const printAddr = (string) => {
//     promise = new Promise ((resolve) => {
//         setTimeout(() => {
//             console.log(string);
//             resolve(string);
//         }, 2000);
//     });
//     return promise;

// }

// const getAddress = () => {
//     printAddr("121 Worcester Rd").then(()=>{
//         return printAddr("Fairhaven");
//     }).then(()=>{
//         return printAddr("NY 14228");
//     }).catch((err) =>{
//     console.log(err);
//     });
// }

// getAddress();
    


/// Promises introduction 

// const myNewPromise = new Promise((resolve, reject) => {
//     if (Math.random() * 10 <= 6) {
//         resolve('Hello, My promise was a success!');
//     }
//     reject(new Error('My promise failed'));
// });
// myNewPromise.then((success) => {console.log(success);
// }, (error) => {
// console.log(error);
// });


