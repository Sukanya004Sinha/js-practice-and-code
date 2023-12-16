"use strict" //treat all js code as a newer version
//alert(3+3) // i am using node js not browser
let state = null
/**
 * number => 2 to the power 53
 * big int 
 * String = ""
 * boolean => true/false
 * null =>standalone value
 * undefined =>values not defiined
 * 
 * 
 * object
 */
console.log(typeof undefined)  // undefined
console.log(typeof null) //object


//Primitive types 
// 7 types: String,number,Boolean,null,undefined,Symbol,BigInt
//Reference types
//Array, Objects,Functions

const score =100;
const temp= null;
const isLoggedIn = true;
const scoreVal = 100.3;
let userEmail;
const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id===anotherId);
console.log(id);
console.log(anotherId);
const BigNumber = 1234123412344n;

const heros= ["shakiman", "Chota Bheem", "Nagraj"]
let myobj = {
    name: "sukanya",
    age: 22,
}

const myFunc = function(){
    console.log("Hello World");
}
// find types of any datatypes
console.log( typeof myFunc);
console.log(typeof heros);
console.log(typeof myobj);
console.log(typeof temp);
console.log(typeof scoreVal);
console.log(typeof id);

