//datatypes-summary
    // primitive dATATYPES
         //7types= string, number, null, undefined, symbol, boolean, BigInt

         const score = 100
         const valuetype = 83.5

         const isLoggedIn = false
         const outsideTemp = null
         let userEmail;
         const Id = Symbol('12345')
         const anotherId = Symbol('12345')
         console.log(Id === anotherId);

        const bigNumber = 123456789011
     

    //reference type(non primitive datatype)
          // arrays, objects, functions
  
         const heros = [ "shaktiman", "nagraj", "doga" ]
         let myObj = {
         name : "Atharv",
         age :  18,
         }
         const myFunction = function(){
          console.log("hello world");
         }
         console.log(typeof bigNumber);
         console.log(typeof scoreValue);
         console.log(typeof myFunction);
         console.log(typeof heros);
         console.log(typeof null);
         console.log(typeof "name");
         console.log(typeof age);
         console.log(typeof outsideTemp);
        // console.log(typeof isLoggedIn);
