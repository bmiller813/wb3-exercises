//EXERCISE 1 - SLIDE 21
function convertFtoC(fah){
    let convertFah = (((fah - 32) * (5 / 9)).toFixed(2));
    console.log("The Temperature in Celsius is: " + convertFah);
}

convertFtoC(212);
convertFtoC(90);
convertFtoC(72);
convertFtoC(32);
convertFtoC(0);
convertFtoC(-40);
