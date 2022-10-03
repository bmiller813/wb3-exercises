//EXERCISE 3 - SLIDE 21
function getSocSecTax(Name, grossPay){
    let finalTax = (grossPay * (6.2 / 100)).toFixed(2);
    console.log(Name + "'s tax: " + finalTax);  
}

function getMedicareTax(Name, grossPay, tax){
    let finalTax = (grossPay * (1.45 / 100)).toFixed(2);
    console.log(Name + "'s Medical tax: " + finalTax);  
}

function getFederalTax(name, grossPay, taxCode){
    let taxPercent = 0

    if(taxCode == 0){
        taxPercent = 23;
        
    }
    else if(taxCode == 1){
        taxPercent = 21;
        
    }
    else if(taxCode == 2){
        taxPercent = 19.5;
       
    }
    else if(taxCode == 3){
        taxPercent = 18.5;
        
    }
    else if(taxCode >= 4){
        //taxPercent = 18;
        const defaultBase = 0.18;
        const halfPercent = 0.005;
        const codeBase = 4;
        //STEP BY STEP  
        let over = taxCode - codeBase;
        let extra = halfPercent * over;
        let rate = (defaultBase - extra).toFixed(2);
        console.log("RATE: " + rate);
        return grossPay * rate;
        //OR ALL AT ONCE
        //return grossPay * (defaultBase - (taxCode - codeBase))
        
    }
    else{
        console.log("Working?");
    }

    let tax = (taxPercent / 100);
    let finalTax = (grossPay * tax).toFixed(2);
    console.log(name + "'s Federal tax: " + finalTax);
}





getSocSecTax("Choom", 750);
getMedicareTax("Pop", 1550, 19.5);
console.log( );
getFederalTax("Bryan", 750, 0);
getFederalTax("Jake", 1550, 2);
getFederalTax("Eric", 1100, 6);