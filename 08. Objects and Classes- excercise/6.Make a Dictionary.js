function dictionary(array) {
    let dictionary = {};
  let parsed = array.map(JSON.parse);

  parsed
  .forEach((element)=> {
    let keyAndValue = Object.entries(element);
    
    let term = keyAndValue[0][0]
    let definition = keyAndValue[0][1];
    dictionary[term]=definition;
  });
  let sortedWords = Object.entries(dictionary);
  sortedWords
  .sort((a,b)=>a[0].localeCompare(b[0]));

  for (let m of sortedWords) {
      console.log(`Term: ${m[0]} => Definition: ${m[1]}`);
      
  }
  
}
dictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]
    )