// require('dotenv').config();
/*
let name = "An";
let age = 20;
let rating = 20.0;
let x = null;

console.log(age);

// Datatypes: String, Numbers, Boolean, null, undefined
console.log(typeof age);
console.log(typeof rating);
console.log(typeof x);
console.log('I am ' + age);

// Template strings
console.log(`My name is ${name} and my age is ${age}`);

// Strings
let s = "hello";
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.substring(0,2).toUpperCase());

// Split by delimiter
let s2 = "hello world";
console.log(s2);
console.log(s2.split(""));
console.log(s2.split(" "));

const numbers = new Array(1,2,3,4,5);
console.log(numbers);
const hats = new Array("hat 1",2, true,4, null);
console.log(hats);
console.log(hats[0]);
hats[0] = 45;
console.log(hats.length);
console.log(hats[0]);
hats.push("Mango hat");
console.log(hats.length);
console.log(hats);
// puts at front
hats.unshift("first!");
console.log(hats);

// check if array
console.log(Array.isArray(hats));
console.log(Array.isArray(true));
console.log(hats.indexOf("hat 1"));


const person = {
    name: 'An',
    age: 20,
    hobbies: ['nothing', 'nothing', 'programming'],
    address: {
        street: '100 main st',
        city: 'Boston',
        state: 'MA'
    }
}

console.log(` An lives in ${person.address.city}, ${person.address.state}`);
console.log(person.hobbies[2]);

// destructuring
const { name, age, address: { city } } = person;
console.log(name);
console.log(city);

person.email = "test@gmail.com";
console.log(person.email);

const todos = [
    {
        id: 1,
        text: "item 1",
        isCompleted: false
    },
    {
        id: 2,
        text: "item 2",
        isCompleted: false
    },
    {
        id: 3,
        text: "item 3",
        isCompleted: true
    },
]
console.log(todos);
console.log(todos[1].text);

const todoJson = JSON.stringify(todos);
console.log(todoJson);

// indexed for
for (let i = 0; i < todos.length; i++) {
    console.log(todos[i]);
}

// for of loop
for(let todo of todos) {
    console.log(todo);
}

// while
let whileInt = 0;
while (whileInt < 10) {
    console.log(whileInt);
    whileInt++;
}

// high order array methods
todos.forEach( (todo) => console.log(`ID: ${todo.id}`));
const mappedTodos = todos.map( (todo) => `Map ID: ${todo.id}`);
const mappedTodosNoArrow = todos.map( function(todo) {
    return `Map no arrow ID: ${todo.id}`;
} );
const completed = todos.filter( (todo) => todo.isCompleted).map
( (todo) => todo.text);
todos.forEach( (todo) => console.log(`ID: ${todo.id}`));

console.log(mappedTodos);
console.log(mappedTodosNoArrow);
console.log(completed);


// conditionals
const x = '40';
const y = 11;

// double doesn't match data types
// triples does match data types
if ( x == 10 || y > 10) {
    console.log('x is 10 or y is greater than 10')
} else if (x > 10) {
    console.log("x is greater");
} else {
    console.log("x is less than");
}

// ternary operator
const ternX = 10;

const color = ternX > 10 ? 'red' : 'blue';

// switch operator
switch(color) {
    case 'red':
        console.log("color is red");
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is neither');

}

// plain function
function addNumsFunc(num1, num2) {
    return num1 + num2;
}

// arrow function with default values
const addNums = (num1 = 1, num2 = 1) => num1 + num2;

// arrow with 1 input
const addNumsSmall = num1 => num1 + 20;

console.log(addNumsFunc(9, 1));
console.log(addNums());
console.log(addNumsSmall(30));

function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
}

// creating prototypes for objects
Person.prototype.getBirthYear = function getBirthYear() {
    return this.dob.getFullYear();
}
Person.prototype.getFullName = () => `${this.firstName} ${this.lastName}`;

const person1 = new Person("one", "Vu", '11/04/1999');
const person2 = new Person("two", "Vu", '11/05/2000');
console.log(person1);
console.log(person2.firstName);
console.log(person2.dob.getFullYear());

console.log(person1.getBirthYear());
console.log(person1.getFullName());
console.log(person1);


// ES6 classes (syntactic sugar, logically the same as above)
class PersonClass {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    } 
}

console.log("class person:");

const person3 = new PersonClass("two", "Vu", '11/05/2000');
console.log(person2.firstName);
console.log(person2.getBirthYear());



// DOM Stuffs

// single element selectors
const form = document.getElementById('my-form');
console.log(form);
console.log(document.querySelector('.container'));
console.log(document.querySelectorAll('.item'));

const items = document.querySelectorAll('.item');

items.forEach((item) => console.log(item));

// multiple element selectors


const ul = document.querySelector('.items');

// ul.remove();
// ul.lastElementChild.remove();
ul.firstElementChild.textContent= "hello";
ul.children[1].innerText = 'An';
// ul.lastElementChild.innerHTML = '<h1> Test 3rd H1 </h1>';

const btns = document.querySelectorAll('.btn');
btns.forEach((todo) => todo.style.background = 'red');

const btn = document.querySelector('.btn');
btn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("click");
    console.log(e.target.className);
    document.querySelector("#my-form").style.background = '#ccc';
    // document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML = '<h1> Hello </h1>';
})
*/

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    // console.log(nameInput.value);

    if(nameInput.value === '' || emailInput.value === '') {
        msg.innerHTML = 'Please enter all fields!';
        msg.classList.add('error');
        setTimeout(() => msg.remove(), 3000);
    } else {
        const li = document.createElement('li');
        if (Math.random() > 0.5) {
            li.appendChild(document.createTextNode(`${nameInput.value} <3 ${emailInput.value}`));
        } else {
            li.appendChild(document.createTextNode(`${nameInput.value} </3 ${emailInput.value}`));
        }
        
        userList.appendChild(li);

        nameInput.value = '';
        emailInput.value = '';
    }

}

