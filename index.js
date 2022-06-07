// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

let user = {
  name: "John",

  sayHi: ()  => {
    alert(this.name);
  }
}

function sayHi() {
  console.log(this.name);
}

user.sayHi = sayHi;
user.sayHi();