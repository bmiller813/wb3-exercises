// EXERCISE 1 SLIDE 16
function displayMailingLabel(name, address, city,  state, zip){
    console.log(name); 
    console.log(address); 
    console.log(city); 
    console.log(state);  
    console.log(zip);
}




//PART 2
function addNumbers(num1, num2){
    let result = Number(num1) + Number(num2);
    let eq = num1 + " + " + num2 + " = " + result;
    console.log(eq);
};


//PART 3
function displayReceipt(totalDue, amountPaid){
    
    let changeDue = (Math.abs(totalDue - amountPaid).toFixed(2));
    let remainingFunds = ((totalDue - amountPaid).toFixed(2));
    //return "total: " + totalDue;
    //return "Paid: " + amountPaid; //RETURN ENDS CODE
    //return "Change: " + changeDue;
    console.log("Total: $" + totalDue);
    console.log("Paid: $" + amountPaid);
    if(amountPaid >= totalDue){
        console.log("Change: $" + changeDue);
    }
    else{
        console.log("Insufficient Funds \nRequired: $" + remainingFunds);
    }
}

//let receiptCall = displayReceipt(20, 20.53);


//CALLING ALL THE FUNCTIONS
displayMailingLabel("Bryan", "3333 aha rd", "My City", "FL", "336339");

console.log(    );

addNumbers(5, 19);

/*
let someNum1 = 5;
let someNum2 = 19;

addNumbers(someNum1, someNum2);

someNum1 = 3;
someNum2 = 6;

addNumbers(someNum1, someNum2);
*/
console.log(     );

displayReceipt(20,39.87);
console.log( );
displayReceipt(20, 20);
console.log( );
displayReceipt(20, 3.36);
