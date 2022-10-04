//SECTION 2-12 EXERCISE 1 SLIDE 51

function parseAndDisplayName(name){
    const SPACE = " ";
    const STARTING_INDEX = 0
    const NO_MATCH = -1
    let whereToCut = name.indexOf(SPACE);   //WHERE IS THE SPACE

    if(whereToCut == NO_MATCH){
        //one name
        console.log("\nONLY: " + name);
        return; //EXIT FUNCTION
    }

    //AT LEAST TWO NAMES

    let leftSide = name.substring(STARTING_INDEX, whereToCut); //TWO PARAMETERS - START AND STOP
    let rightSide = name.substring(whereToCut + 1);  // ONE PARAMETER - WHERE TO START (IMPLIED TO THE END)

    //CHECK FOR MIDDLE
    let whereToCut2 = rightSide.indexOf(SPACE); //WHERE IS THE SECOND SPACE - OFFSET

    if (whereToCut2 == NO_MATCH){
        //TWO NAMES
        //OLD NAMES - NO MIDDLE
        console.log("\nNAME: " + name);
        console.log("\nFIRST: " + leftSide);
        console.log("\nLAST: " + rightSide);
    }

    console.log("NAME: " + name);
    console.log("FIRST: " + leftSide);
    console.log("LAST: " + rightSide);
}
/*



*/

let name = "Brenda Kaye";
parseAndDisplayName(name);


parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Ian Auston");
parseAndDisplayName("Siddalee Grace");
