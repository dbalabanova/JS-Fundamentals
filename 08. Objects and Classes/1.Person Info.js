function person(first, last, number) {
    let personInfo={};
    personInfo.firstName = first;
    personInfo.lastName = last;
    personInfo.age = number;
    let entries = Object.entries(personInfo);
    for (const [key,value] of entries) {
       console.log(`${key}: ${value}`);
    }
}