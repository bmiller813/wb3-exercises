function do_it(name, phrase){ //Define the function and its parameters/arguments
    return phrase + name; // sending back a result - not printing/logging
}

const dew = "Do the dew! ";
console.log(do_it("Bryan ", dew)) //call function by name, and pass in argument values
console.log(do_it("Mayne", dew)) //Immediately print

let result = do_it("Bob", dew) //Capture in a variable - best if you want to do more than just print it
console.log(result) //Then Print
console.log(result) //Then Print