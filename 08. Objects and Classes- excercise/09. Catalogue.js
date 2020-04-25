function catalogue(array) {
    let product = {};
    let letters = [];
    let words = {};

    for (let i = 0; i < array.length; i++) {
        let [key, value] = array[i].split(' : ');
        product[key] = value

    }
    let entries = Object.entries(product);
    entries
        .sort((a, b) => a[0].localeCompare(b[0]));



    for (let i = 65; i <= 90; i++) {
        letter = String.fromCharCode(i)
        for (let j = 0; j < entries.length; j++) {
            let currentWord = entries[j][0];
            let firstLetter = (currentWord.split(''))[0];

            if (firstLetter === letter) {
                words[letter] = [];
                words[letter].push(entries)
            
            }

        }
       // let filtered = entries.filter(firstLetter => firstLetter === letter);


    }


//String.fromCharCode(i)
console.log(words);

}
catalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
)