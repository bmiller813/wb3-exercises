constsdata = "first, last, number"
const text = "Now is the time for all good people to come to the aid of their planet.";
console.log(text);
console.log(typeof text);
console.log(text.length);

console.log("---");

let words = text.split(" ") //CONVERT STRING TO ARRAY/LIST - BETTER PARSING - swiss army knife
console.log(words);
console.log(typeof words);
console.log(words.length);
console.log(words[0]);
//console.log(words[15]);
console.log(words[words.length - 1]);

//Manipulate values
words[words.length - 1] = "party."
console.log(words);

//Put array pieces back into a single string - using join()
text2 = words.join("-"); //glue back together with a space
console.log(text2);

//old school loop
/*
for (let i = 0; i < words.length; i++){ 
    console.log(words[i])
}
*/

//new school 
words.forEach(w => {console.log(w);}); 