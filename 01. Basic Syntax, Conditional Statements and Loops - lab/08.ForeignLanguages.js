function solve(country) {
switch(country) {
    case "USA": case "England": console.log("English"); break;
    //case "England": console.log("English"); break;
    case "Spain": case "Argentina": case "Mexico": console.log("Spanish"); break;
    //case "Argentina": console.log("Spanish"); break;
   // case "Mexic": console.log("Spanish"); break;
    default: console.log("unknown");
    }
}
solve("England")