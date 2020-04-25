function criteria(array) {
  let output = array.sort(sortNames);
  console.log(output.join('\n'));
  
    function sortNames(a,b){
        let firstCriteria = a.length-b.length;

        if(firstCriteria===0){
            return a.localeCompare(b);
        }
        return firstCriteria;
    };
}
criteria(["alpha", "beta", "gamma"])