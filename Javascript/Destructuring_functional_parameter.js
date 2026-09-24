const book={
    title:"Dune",
    author:"Frank Herbert",
    pages:412,
    isAvailable:true,
};
function printBook({title,author}){
    console.log(`${title} by ${author}`);

}
printBook(book);

// with defaults too

function greet({name="Guest"}={}){
    console.log(`Hello ,${name}`);

}
greet();
greet({name:'Ada'});