if(true){
    var a=1;
    let b=2;

}
console.log(a); // var leaked out of the block
console.log(b); // reference error b is gone block scope

const y=1;
y=2;  //Type error assignment to constant variables

const book ={ title : "name"}; //MUTATING THE OBJECT
book.title="1984";  // 1984
console.log(book.title);

book={title: "DUNE"}   //TYPE ERROR RESASSIGNING THE VARIABLE

var z=1;
var z=2;
console.log(z);

let a=1;
let a=2;