//while loops
function tryConnect() {

    // Simulates a 30% chance of success
    const didSucceed = Math.random() < 0.3;

    console.log(didSucceed ? "Connected" : "Failed", "retrying...");

    return didSucceed;
}

let attempts = 0;
let success = false;

while (attempts < 5 && !success) {

    attempts++;
    success = tryConnect();
}

console.log(`Stopped after ${attempts} attempt(s). Success: ${success}`);


// For of nd for in loops

const colors=["red","green","blue"];

for(const color of colors){
    console.log(color);
}
for(const index in colors){
    console.log(index);
}

//for in loops with objects

const student={name:"Ada",age:20,course:"CS"};
for(key in student){
    console.log(`${key}:${student[key]}`);
}