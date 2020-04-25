function toObject(jsonString) {
    let object = JSON.parse(jsonString);
    let entries = Object.entries(object);
    for (const [key,value] of entries) {
        console.log(`${key}: ${value}`);
        
    }
}
toObject('{"name": "George", "age": 40, "town": "Sofia"}')