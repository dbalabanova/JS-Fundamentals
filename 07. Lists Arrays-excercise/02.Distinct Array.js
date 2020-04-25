function distinct(array) {

    for (let i = 0; i < array.length; i++) {
        let remove = array.indexOf(array[i], i + 1);
        if (remove != -1){
            array.splice(remove, 1);
        i = 0;
        }
    }
    console.log(array.join(' '));

}
distinct([1, 3, 2, 3, 4, 4, 4])