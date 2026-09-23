// Write an if/else if/else chain that grades a score, then rewrite the same logic as a switch where it makes sense.

// Write a loop that logs numbers 1–10, skipping multiples of 3 using continue.

// Write the same function three ways: declaration, expression, and arrow.

// Write a function that takes another function as a parameter and calls it twice on a value (like applyTwice above), then test it with two different functions.

// Q1



// 1. if / else if / else

let score = 85;

if (score >= 90) {
    console.log("Grade A");
} else if (score >= 80) {
    console.log("Grade B");
} else if (score >= 70) {
    console.log("Grade C");
} else if (score >= 60) {
    console.log("Grade D");
} else {
    console.log("Grade F");
}

// switch

let grade = "B";

switch (grade) {
    case "A":
        console.log("Excellent");
        break;
    case "B":
        console.log("Good");
        break;
    case "C":
        console.log("Average");
        break;
    case "D":
        console.log("Needs Improvement");
        break;
    case "F":
        console.log("Fail");
        break;
    default:
        console.log("Invalid grade");
}

// 2. Loop: 1–10, skip multiples of 3

for (let i = 1; i <= 10; i++) {
    if (i % 3 === 0) {
        continue;
    }

    console.log(i);
}

// 3. Function declaration

function add(a, b) {
    return a + b;
}

console.log(add(5, 3));

// Function expression

const add = function(a, b) {
    return a + b;
};

console.log(add(5, 3));

// Arrow function

const add = (a, b) => {
    return a + b;
};

console.log(add(5, 3));

// 4. Function taking another function as parameter

function applyTwice(func, value) {
    return func(func(value));
}

function double(x) {
    return x * 2;
}

function addTen(x) {
    return x + 10;
}

console.log(applyTwice(double, 5));    // 20
console.log(applyTwice(addTen, 5));    // 25