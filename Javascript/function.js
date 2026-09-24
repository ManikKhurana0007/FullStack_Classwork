// function  declaration 



console.log(add(2,3));
function add(a,b){
    return a+b;
};

// function expression 
// FUNCTION DECLARATION -> fully hoisted

console.log(add(2, 3)); // Output: 5

function add(a, b) {
    return a + b;
}

// FUNCTION EXPRESSION

console.log(multiply(2, 3)); 
const multiply = function(a, b) {
    return a * b;
}

console.log(subtract(5, 2));

var subtract = function(a, b) {
    return a - b;
}

// ARROW FUNCTION

const divide = (a, b) => {
    return a / b;   
};

console.log(divide(6, 2));