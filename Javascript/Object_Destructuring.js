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