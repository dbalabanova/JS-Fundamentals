function cats(array) {
    class Cat {
        constructor(name,age){
            this.name = name;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
            
        }
    }

    array
    .map((element)=>element.split(' '))    
    .map(([name,age])=>new Cat(name,age))
    
    .forEach(cat => cat.meow());
}
cats(['Mellow 2', 'Tom 5'])