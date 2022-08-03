/*1. What is javascript?
=> JavaScript is a scripting language for the web. It is an interpreted language, which means it does not need a compiler to translate its code like C or C++. JavaScript code runs directly in a web browser.

2. How does JS work?
=>The web browser loads a web page, parses the HTML, and creates what is known as a Document Object Model (DOM) from the contents. The DOM presents a live view of the web page to your JavaScript code.

3. What is Variable?
=> A variable is any characteristics, number, or quantity that can vary.
*/

// 4. Declare a variable
var name1 = 'mohammod ali';

// 5. types of variable?
// Boolean(true,false), string, number;
   console.log(typeof(name1)) 

// 6. primitive and non-primitive data types
  /*
   => primitive data type: Number, string, boolean, nul, undefined
   => non-primitive data type: Array, orbject
  */ 
// 7. Naming convention of js variable.
// 8. Math operation +, -, *, /,%
// short hand +=, -=, *=, /= . ++, --, 
//parseInd, parseFloat
var num = 99.99;
console.log(parseInt(num))
console.log(parseFloat(num))
console.log(Number(num.toFixed(2)))