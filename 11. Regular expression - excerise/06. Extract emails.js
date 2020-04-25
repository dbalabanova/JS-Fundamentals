function emails(array) {
let pattern = /(^|(?<=\s))([a-z]+|\d+)([a-z]+|\d+|[\.\-]+)([a-z]+|\d+)\@(([a-z]+[\-]*[a-z]+)([.][a-z]+[\-]*[a-z]+)+((?<![\.\-])))/g
let sth = array[0].split(' ').forEach((el)=>{
if(el.match(pattern)){
    let elArr = el.split('')
    if(elArr[elArr.length-1]==='.'||elArr[elArr.length-1]===','){
        elArr.pop();
    }
    let output = elArr.join('')
    console.log(output);
    
}
})

}
emails([ 'Please contact us at: support@github.com.', 'end' ])
emails(['Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.'])
emails(['Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de.'])
// emails(['deni@softuni.bg', 
//     'deni@software-university.com',
//     'deni@intoprogramming.info ',
//     'deni@mail.softuni.org',
    
//     'info@softuni-bulgaria.org',
//     'kiki@hotmail.co.uk',
//     'no-reply@github.com',
//     's.peterson@mail.uu.net',
//     'info-bg@software-university.software.academy',
    
//     '--123@gmail.com',
//     '…@mail.bg',
//     '.info@info.info',
//     '_steve@yahoo.cn',
//     'mike@helloworld',
//     'mike@.unknown.soft.',
//     's.johnson@invalid-.'])