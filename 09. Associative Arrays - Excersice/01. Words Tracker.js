function tracker(array) {
    let lookingFor = array.shift().split(' ');
    let mapWords = new Map();

    for (let i = 0; i < lookingFor.length; i++) {
        let currentWord = lookingFor[i];
        let count = 0;
        for (let j = 0; j < array.length; j++) {
            if (array[j] === currentWord) {
                count++;
            }
            mapWords.set(currentWord, count)

        }
    }

    let arrayMap = [...mapWords.entries()]
    let sorted = arrayMap
        .sort((a, b) => b[1] - a[1])
    for (let [key, value] of sorted) {
        console.log(`${key} - ${value}`);

    }

}
tracker([
    'this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the'
    , 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]
)