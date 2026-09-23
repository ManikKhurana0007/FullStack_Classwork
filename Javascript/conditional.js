const age=20;
const hasID=true;
if(age>=18){
    if(hasID){
        console.log("Entry allowed");
    }else{
        console.log("ID required");
    }
}else{
    console.log("Too young");
}


console.log(   age >= 18? (hasID ? "Entry allowed" : "ID required"): "Too young");


for(var i=0;i<3;i++){
    setTimeout(()=> console.log(i),100);
}
for(let i=0;i<3;i++){
    setTimeout(()=> console.log(i),100);
}

