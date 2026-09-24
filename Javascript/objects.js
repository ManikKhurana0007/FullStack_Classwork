const idSymbol = 12345;
const book={
    title:"Dune",
    author:"Frank Herbert",
    pages:412,
    isAvailable:true,
};
console.log(book.title);
console.log(book["title"]);

//adding an element in object
book[idSymbol]=12345;
book.publisher="Chilton Books";
book.pages=500;

console.log(book);

console.log(book[idSymbol]);
console.log(book["idSymbol"]); //undefined a string idsymbol 
console.log(book.idSymbol);  // undefined dot notation looks for a literal


book.author="Manik";
console.log(book["author"]);

//freeze (object ko freeze karne ke badd kio bhi change replicate nahi hoga)

Object.freeze(book);

// book.name="HelloWorld"; //name will not change

// const obj=new Object();
// obj.key="value";
// obj.name="JOhn Doe";
// console.log(obj.key);
// console.log(obj.name);


// object methods
const book1={
    title:"Dune",
    author:"Frank Herbert",
    pages:412,
    describe:function(){
        return `${this.title} has ${this.pages} pages.`
    },
};
console.log(book1.describe());