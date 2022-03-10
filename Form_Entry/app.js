'use strict';

const template = document.querySelector('template');
const node = document.importNode(template.content, true);
document.body.appendChild(node);




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
