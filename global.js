
const global = 'Hi. I am Global!'

// Functoin Scoped
function HelloWorld(){
    const hello = "Welcome to JS!"
    console.log(hello);
    console.log(global);

}

HelloWorld();

// console.log(hello);

// Blocked scope
{
    const hello2 = 'Welcome to JS!';//this is block scoped
    console.log(hello2);
    console.log(global);
}

// console.log(hello2);// This will give error hello is not defined     

// 

let piNew=3.14;
let infiniteNum= 12/0; //This will return infinity
const  notANum= 'here'*2; //This will return NaN which stands for Not a number, an invalid expression
let name="JavaScript";
let fullName='JavaScript'+'Rocks';
console.log(piNew,infiniteNum,notANum);
console.log(name, fullName);

let greeting = `Hello, ${fullName}!` ;// the variable fullName value will get substituted and assigned
console.log(greeting);

let showFlag=true;
const num1=600;
let BigNum = num1>1000; // condition can return true or false as the result
console.log(showFlag,BigNum);
let  yearOfManufacture = null;
console.log(yearOfManufacture);

let num3;
console.log(num3); //undefined
let num2=10;
num2=undefined;
console.log(num2);//undefined

var person={
	name:'Peter',
	age  :24,
	designation:'Software Engineer',
	Allocated: true}
console.log(person);
console.log(person.name);
var cities= ["Hyderabad", "NewYork", "Calgary"];// here all the 3 values are strings
console.log(cities);
console.log(cities[0]);

console.log(typeof 19); //number
console.log(typeof 'JavaScript');  //string
console.log(typeof true); // boolean
console.log(typeof undefined);  // undefined

let num1 = 6;
let num2 = 4;

console.log(num1 * 4); // Multiplication
console.log(num1 / num2); // Division

let rem= num1 % num2; // Modulus

console.log(num1++); // Post-increment
console.log(num1);
++num1; // Pre-increment
console.log(num1);
num1-- // Post-decrement
console.log(num1);
--num1 // Pre-decrement
console.log(num1);

var num3 = 4; // Assignment Operator
num3 += 2; // Addition Assignment, same as num = num + 2;
console.log(num3);
num3 -=1; //Subtraction Assignment
console.log(num3);
num3 *= 5; //Multiplication Assignment
console.log(num3);
num3 /= 2; // Division Assignment
console.log(num3);
num3 %= 2; //Modulus Assignment
console.log(num3);


var square = function(x) {
    return x * x;
};
    function calculateDistanceTravelled(startPos, currentPos) {
        var distance = Math.sqrt( square(currentPos.xPos - startPos.xPos) + square(currentPos.yPos - startPos.yPos));
        return Math.ceil(distance);
    } 
    var startPos = { xPos : 20, yPos : 20 };
    var currentPos = { xPos : 40, yPos : 40 };
    document.write("You have travelled : " + calculateDistanceTravelled(startPos, currentPos) + " KM ");
        
    array = [ 1, 2, 3, 4, 5, 6 ];
    for (index = 0; index < array.length; index++) {
    console.log(array[index]);
    }
    
    
    do{
    console.log(array[index]);
    index++;
    }while (index < array.length);
    
    array.forEach(function(element) {
    console.log(element);
    });
    
    let num=[10,20,30];
    square= num.map((n,index)=> {
    return n*n;
    });
    console.log(square);//[100,400,900]
    
    let num1=[10,20,30];
    square= num1.reduce((sum,n)=> {
    return sum + n*n;
    });
    console.log(square);//  1310
    
    let num2=[10,20,30, 40,50,60];
    filtered= num2.filter((num)=> {
    return num>=30;// true or false depending on the element value
    });
    console.log(filtered);//[30, 40,50,60] 
    
    num=[1,2,3,4,5];
    x= num.push(6,7,8);
    console.log(num); //[1,2,3,4,5,6,7,8]
    console.log(x);// 8
    
    arr1=[1,2,3]
    arr2=[4,5];
    arr3=[6,7,8];
    arr= arr1.concat(arr2,arr3);
    console.log(arr); //[1,2,3,4,5,6,7,8]
    
    num=[1,2,3,4,5];
    x= num.pop();
    console.log(num); //[1,2,3,4]
    console.log(x);// 5
    
    num=[1,2,3,4,5];
    x= num.shift();
    console.log(num); //[2,3,4,5]
    console.log(x);// 1
    
    num=[1,2,3,4,5];
    num.splice(2,1,11,12,13); //start at 2nd position and replace 1 element and add the new list
    console.log(num); //[1,2,11,12,13,4]
    
    num=[1,2,3,4,5];
    arr1= num.slice();
    arr2= num.slice(1,3);
    arr3=num.slice(2);
    console.log(num); //[1,2,3,4,5]
    
    console.log(arr1);// [1,2,3,4,5]
    console.log(arr2);// [2,3]
    console.log(arr3);// [3,4,5]
    