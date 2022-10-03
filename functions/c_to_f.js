//EXERCISE 2 - SLIDE 21
function convertCtoF(cel){
    convertCel = ((cel * (9 / 5)) + 32).toFixed(2);
    console.log("The Temperature in Fahrenheit is: " + convertCel);
}

convertCtoF(100);
convertCtoF(45);
convertCtoF(19);
convertCtoF(0);
convertCtoF(-7);
convertCtoF(-40);