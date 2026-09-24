const mixed=[1,"two",true,null,{name:"object"},[1,2]];

const books=["Dune","1984","Emma"];

console.log(books[0]);
console.log(books[books.length-1]); //emma
console.log(books.at(-1));//emma

books[1]="Brave new World";
console.log(books);
console.log(books[10]);


const original=[3,1,2];
const mapped=original.map((n)=>n*2);
console.log(mapped);

original.sort();
console.log(original()); //[1,2,3]

const fruits=["apple","banana"];
fruits.push("cherry");
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.unshift("mango");
console.log(fruits);

fruits.shift();
console.log(fruits);


const nums=[1,2,3,4,5];

nums.splice(2,1);
console.log(nums);

nums.splice(1,0,("a","b"));
console.log(nums);

nums.splice(0,2,"x");
console.log(nums);

const a=[1,2];
const b=[3,4];

const combined=a.concat(b);
console.log(combined);

//spread - the modern equivalent does the same job
const combined2=[...a,...b];
console.log(combined2);

//slice
const numss=[0,1,2,3,4,5];
console.log(numss.slice(1,4));
console.log(numss.slice(-2));
console.log(nums);

//join
console.log(["a","b","c",].join("-"));
console.log(["a","b","c",].join(""));