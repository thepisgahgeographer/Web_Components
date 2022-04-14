'use strict';

const template = document.querySelector('template');
const node = document.importNode(template.content, true);
document.body.appendChild(node);

// let theNumber = Number(prompt("Pick a number"));
// if (!Number.isNaN(theNumber)) {
//   console.log("Your number is the square root of " +
//               theNumber * theNumber);
// } else {
//   console.log("Hey. Why didn't you give me a number?");
// }

// let result = 1;
// let counter = 0;
// while (counter < 10) {
//   result = result * 2;
//   counter = counter + 1;
// }
// console.log(result);

// for (let line = "#"; line.length < 8; line += "#")
//   console.log(line);

//   const hummus = function(factor) {
//     const ingredient = function(amount, unit, name) {
//       let ingredientAmount = amount * factor;
//       if (ingredientAmount > 1) {
//         unit += "s";
//       }
//       console.log(`${ingredientAmount} ${unit} ${name}`);
//     };
//     ingredient(1, "can", "chickpeas");
//     ingredient(0.25, "cup", "tahini");
//     ingredient(0.25, "cup", "lemon juice");
//     ingredient(1, "clove", "garlic");
//     ingredient(2, "tablespoon", "olive oil");
//     ingredient(0.5, "teaspoon", "cumin");
//   };

function reverse(param){
  let val = new Array();
  let mapVal = val.map(x=>param);
  // let tst = mapVal.reverse();
  // console.log(tst);
  console.log(mapVal);
}

// // reverse();

// function reverseNum(param){
//   param = param.toString();
//   return param.split("").reverse().join("");
// }

// console.log(reverseNum(12345));

// function alpha(param){
//   //param = param.toString();
//   return param.split("").sort().join("");
// }

// console.log(alpha("jasdlfjakdsf"));

// function toUpper(param2){
//   console.log(param2.toUpperCase());
// }

// toUpper("the brushy mountains");

// const str = 'flexiple';
// const str2 = str.charAt(0).toUpperCase() + str.slice(1);
// console.log(str2);
let str = "the brushy mountains";

let splt = str.split("");
console.log(typeof(splt));


// let test = [1,2,3,4,5];
// console.log(test.reverse());

// const books = [{
//     title: 'The Great Gatsby',
//     author: 'F. Scott Fitzgerald'
//   },
//   {
//     title: 'A Farewell to Arms',
//     author: 'Ernest Hemingway'
//   },
//   {
//     title: 'Catch 22',
//     author: 'Joseph Heller'
//   }
// ];

// function appendBooks(templateId) {
//   const booksList = document.getElementById('books');
//   const fragment = document.getElementById(templateId);

//   // Clear out the content from the ul
//   booksList.innerHTML = '';

//   // Loop over the books and modify the given template
//   books.forEach(book => {
//     // Create an instance of the template content
//     const instance = document.importNode(fragment.content, true);
//     // Add relevant content to the template
//     instance.querySelector('.title').innerHTML = book.title;
//     instance.querySelector('.author').innerHTML = book.author;
//     // Append the instance ot the DOM
//     booksList.appendChild(instance);
//   });
// }


// document.getElementById('templates').addEventListener('change', (event) => appendBooks(event.target.value));

// appendBooks('book-template');




// class Ary {
//   constructor(name, leng) {
//     this.name = name;
//     this.leng = leng;
//   };
//   printAry() {
//     Ary.forEach(element => {
//       console.log(element);

//     });

//   }
// };

// console.log(Ary.printAry());

// let ary = new Array();
// let ary1 = ["t", "B", "B", "t", "t"];
// ary1.forEach((element) => {
//       if (ary1.includes("B")) {
//         ary.push();
//       };
// });

// console.log(ary);

// let val = Math.min(2,4);
// console.log(val);

// for (var i = 0; i <= 7; i++) {
//   for (var char = 1; char < 1; char++) {
//       var symbol = "#";
//       console.log(char);
//       symbol += "#";
//   }
// }


// for(let line="#"; line.length<8; line+="#"){
//   console.log(line);
// }


    
    
    
    
    
    
//     // //
