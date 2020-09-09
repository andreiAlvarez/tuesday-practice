// solution 1

function convertToF(celsius) {
  let fahrenheit;
  fahrenheit = celsius*9/5+32;
  return fahrenheit;
}

// arrow function 

const convertToF = celsius =>  celsius*9/5+32;

//Reverse a String

function reverseString(str) {
   return str.split("").reverse().join("");
}

// arrow function 

const reverseString = str => str.split("").reverse().join("");

//Factorialize a Number

const factorialize = num => {
  let total = 1;
  for (let i = 1; i <= num; i++) {
    total = total*i;
    }
    num = total; 
  return num;
}
