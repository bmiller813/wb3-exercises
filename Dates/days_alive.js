//EXERCISE 1 SLIDE 
//JAN 1st 1970 is time 0 (anything before will be negative because computer time starts from 1970)

//ENTER YOUR BIRTHDAY AND TIME
let ms_born = new Date("12/26/2002 1:34 pm"); //born time 
let ms_current = new Date(); //current time 

console.log("BORN: " + ms_born.toLocaleString()); //.toLocalString() -> human readable
console.log("NOW: " + ms_current.toLocaleString());

/*console.log(ms_born.getTime()); //RAW ms
console.log(ms_current.getTime());*/
console.log("DIFF");

let ms_alive = ms_current.getTime() - ms_born.getTime();
let ms_day = 24 * 60 * 60 * 1000
console.log("ms in a day " + ms_day);
let days_alive = ms_alive / ms_day;
console.log("DAYS ALIVE: " + days_alive);