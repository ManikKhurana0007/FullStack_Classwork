const book={
    title:"Dune",
    author:"Frank Herbert",
    pages:412,
    isAvailable:true,
};
// without destructing
// const title =book.title

const{title,author}=book;
console.log(title,author);

// const {pages}=book;
// const{price}=book; // no field will give undefined;

const{pages,publisher="unknown"}=book;
console.log(publisher) // will be printing unknown instead of undefined


console.log("title" in book);
console.log("publisher" in book);
console.log(book.hasOwnProperty("title"));
delete book.pages;
console.log(book);

console.log(Object.keys(book))
console.log(Object.values(book))
console.log(Object.entries(book))

const merged=Object.assign({},{a:1},{b:2});
console.log(merged);