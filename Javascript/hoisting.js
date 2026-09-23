console.log(p)  //undefined var hoisted and intialized
var p=5;

// console.log(q); // reference error cannot access q before intialization 

let q=5;  // let and const hoisted but stuck in the td2 untll this line

console.log(a);
var a=10;

console.log(a);

sum(10,20);

function sum(x,y){
    console.log(x+y);
}