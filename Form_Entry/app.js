// class MyComponent extends HTMLElement {
//   connectedCallback() {
//     this.innerHTML = `<h1>Hello world</h1>`;
//   }
// }
//
// customElements.define('my-component', MyComponent);
//
//
//
//
// const shadowRoot = document.getElementById('example').attachShadow({
//   mode: 'open'
// });
// shadowRoot.innerHTML = `<style>
// button {
//   background: tomato;
//   color: white;
// }
// </style>
// <button id="button"><slot></slot> tomato cheese</button>`;
//
//
// const fragment = document.getElementById('book-template');
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
//
// books.forEach(book => {
//   // Create an instance of the template content
//   const instance = document.importNode(fragment.content, true);
//   // Add relevant content to the template
//   instance.querySelector('.title').innerHTML = book.title;
//   instance.querySelector('.author').innerHTML = book.author;
//   // Append the instance ot the DOM
//   document.getElementById('books').appendChild(instance);
// });
//
//
// const template = document.getElementById('template');
//
// document.body.appendChild(
//   document.importNode(template.content, true)
// );

class OneDialog extends HTMLElement {
  connectedCallback() {
    const template = document.getElementById('one-dialog');
    const node = document.importNode(template.content, true);
    this.appendChild(node);
  }
}


let ary = ["Shinny Creek", "Jacobs Fork", "Little River"];
// console.log(ary);

ary.forEach(element => console.log(element));

let ary1 = [2,4,6];
let test1 = ary1.map(X => X*2);
console.log(test1);

const test2 = ary.filter(word => word.length >= 12);
console.log(test2);

const test3 = ary.find(val => val.includes("Shi"));
console.log(test3);





//
