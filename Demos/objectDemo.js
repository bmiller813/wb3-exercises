//OBJECT DEMO
function printPerson(person) {//recieves value ans puts into x
    //`` template strings
    console.log(`${person.greeting} my name is ${person.name}.`);
}

let specificPerson = { name: "Bryan", greeting: "Howdy", age: 19 };
printPerson(specificPerson)//pass the object by value

let bb = { name: "Billy Bob", greeting: "Aye", age: 65 };

/*
function printActor(actor){
    console.log("The Actors name is: " + actor);
}
printActor(bb)
//p.age = p.age + 1 // = replace value with expression
//p.age += 1 //Add the amount we specify
p.age++; //Add exactly one

 //  CONCATENATION -chaining together

console.log(p.age)
*/

