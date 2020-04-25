function maxSeq(array) {
    let maxSeq = 0;
    let index = -1
    for (let i = 0; i < array.length; i++) {
        let currentEl = array[i];
        let seq = 1

        for (let j = i + 1; j < array.length; j++) {
            let nextEl = array[j];

            if (currentEl !== nextEl) break;

            seq++;

            if (seq > maxSeq) {
                maxSeq = seq;
                index = i
            }
        }


    }
    let number = array[index]
    console.log(`${number} `.repeat(maxSeq));
}
maxSeq([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])