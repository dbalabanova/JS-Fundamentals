function toJson(name,lastName,hairColor) {
    let person={
        name,
        lastName,
        hairColor
    }
    let json = JSON.stringify(person);
    console.log(json);
    
}
toJson('George',
'Jones',
'Brown'
)