// MEMORY
//stack memory(for primitive type)
//heap memory(for non primitive type)
let myname = "atharvsharmadotcom"
let  anothername = myname
anothername = "atharvbhai"
console.log(myname);
console.log(anothername);
  
let userOne = {
  email : "atharvsharmarox@google.com", 
   upi :"atharvsharmaokhdfc"
}

let userTwo = userOne

userTwo.email = "mannu78@google.com"

console.log(userOne.email);
console.log(userTwo.email);