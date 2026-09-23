const name = "Ada"
const age = 30

console.log("Hello, "+ name + "! You are " + age + " years old.") // Hello, Ada! You are 30 years old.

console.log(`Hello, ${name}! You are ${age} years old.`) // Hello, Ada! You are 30 years old.

const price = 20
const quantity = 3

console.log(`Total cost: $${price * quantity}`) // Total cost: $60
console.log(`Item costs $${price.toFixed(2)}`)

function shout(text) {
    return text.toUpperCase() + "!"
}

console.log(`${shout("hello")}`) // HELLO!

const oldWay = "Dear Ada, \nThank you for signing up.\nSee you soon."

const newWay = `Dear Ada,
Thank you for signing up.
See you soon.`

console.log(newWay) // Dear Ada, Thank you for signing up. See you soon.

const isMember = true

console.log(`Status: ${isMember ? `Active Member` : `Guest`}`) // Status: Active Member