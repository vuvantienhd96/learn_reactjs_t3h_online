// const and let
let name = 'Jone';
let test;

name = ' hello ';

const person = {
  name: 'person',
  age: 21,
};

person.name; // person

const numbers = [1, 3, 4, 5, 6, 7];
numbers.push(10);

// arrow function

// function sayhi(){
//   console.log("say Hi");
// }

const sayHi = (name, age) => console.log('say Hi');
sayHi('vv', 30);

// forEach

const colors = ['xanh', 'do', 'tim', 'vang'];
colors.forEach((el) => console.log(el));

// Map
let newArray = colors.map((color) => color.slice(0, -1).toUpperCase());
console.log(newArray);
console.log(colors);

// Filter
const classNames = [
  { id: 1, name: 't' },
  { id: 2, name: 'b' },
  { id: 3, name: 'a' },
  { id: 4, name: 'c' },
  { id: 5, name: 't' },
];

const classNames2 = classNames.filter((el) => el.name !== 't');
console.log('classNames', classNames2);

// Spread
const arr2 = [2, 3, 4, 5, 6];
const newArr2 = [...arr2.filter((el) => el % 2 === 0)]; // [2,4,6];
console.log('newArr2', newArr2);

const rootObj = {
  name: 'T',
  age: 25,
};

const newRoot = {
  ...rootObj,
  address: 'DC',
};
console.log(newRoot);

// Destructuring
const profileInfor = {
  name1: 'jj',
  address: {
    street: '2B ha noi',
    city: 'ha noi',
  },
  age: 20,
};

const { name1 } = profileInfor;
console.log(name1);

// class
