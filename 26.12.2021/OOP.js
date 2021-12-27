const myArray = [1, 2, 3, 4, 5, 6 ,7 ,8 ,9, 10];

// take even number by yourself
function fetchEven(myArray){
   let evenNums = [];
    for(let i = 0; i < myArray.length + 1; i++){
          if ( i % 2 == 0 && i != 0 ){
             evenNums.push( i )
          };
        };
    return evenNums
  };

console.log(fetchEven(myArray)); // logs [2, 4, 6, 8, 10]

const myDArray = [1, 2, 3, 4, 5, 6 ,7 ,8 ,9, 10];
// takes even numbers by using filter function in Array
function fetchEvenD(myArray){
   return myArray.filter(num => num % 2 == 0)
}

console.log(fetchEvenD(myDArray)) // logs [2, 4, 6, 8, 10]

let PI = 3.142857142857143;

const calculateAreaOfSphere = (radiusValue, PI) => 4 * PI * radiusValue * radiusValue;

calculateAreaOfSphere(10,PI); // returns 1257.142857142857


// 
let buttonClickCount = 0;

function buttonClick(value) {
  buttonClickCount = value + 1;
}

buttonClick(buttonClickCount);
console.log(buttonClickCount); // 1


// array of objects
const cities = [
    { city: 'Newyork',   country: 'USA' },
    { city: 'Mumbai',    country: 'India' },
    { city: 'Shanghai',  country: 'China' },
    { city: 'New Delhi', country: 'India' },
    { city: 'Tokyo',     country: 'Japan' }, 
                { city: 'Bengaluru',  country: 'India' }
  ];

const indianCities = [];
for (let i = 0; i < cities.length; i++) {
    if (cities[i].country === 'India') {
    indianCities.push(cities[i]);
    }
}
console.log(indianCities);

// filtering the array cities, and return array resulted from filtering to indianCities1
const indianCities1 = cities.filter(function(entry) {
    return entry.country === 'India';
});
console.log(indianCities1);


// Immutability
const simpleString = "Hello world!";

const otherString = simpleString.slice(6,11); 

console.log(simpleString); // Hello world!

console.log(otherString); // world!

var myArray = [1,2,3,4,5];
myArray.push(6); // This statement mutates array and add value to it

console.log(myArray); // [1,2,3,4,5,6]
