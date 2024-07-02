// strings in javascript
//const name = "Atharv"
//const repocount = 50
 
//console.log(name + repocount + "value");
//console.log(`hello my name is ${name} and my repo count is ${repocount}`);
const gameName = new String ('Atharv')
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(1));
console.log(gameName.indexOf('t'));
const newString = gameName.substring(0,4)
console.log(newString);
const anotherString = gameName.slice(-8,4)
console.log(anotherString);
const newStringOne = "       atharv        "
console.log(newStringOne);
console.log(newStringOne.trim());
const url = "https;//atharv.com/atharv%sharma"
console.log(url.replace('%','-'))
console.log(url.includes('atharv'))
console.log(url.includes('sharm'))
console.log(gameName.split());