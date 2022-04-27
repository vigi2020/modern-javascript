//import { AddNumbers, SubtractNumbers } from "./util.js";
import util from "./util.js";

let x = "Jon";
let y = 5;
let z = util.AddNumbers; // Function Pointer is called CallBacks

console.log(z(x, y));

let person = {
  name: "Arya",
  likes: ["coding", "gaming"],
  dislikes: ["nature"],
};

// person and p1 takes and share same memory
let p1 = person;

// ... is called ellipse.
// In Method, it is called Rest.
// In Assigning, it is called Spread.
// { ...person } expanding person object and assigning to new object.
let p2 = { ...person, name: "Sansa" };

//document.getElementById("btncalc").addEventListener("click", calc_click);

document.getElementById("btncalc").addEventListener("click", (e) => {
  let i1 = Number.parseInt(document.getElementById("income1").value);
  let i2 = Number.parseInt(document.querySelector("#income2").value);
  document.getElementById("result").value = CombineIncomes(i1, i2);
});

function calc_click() {
  let i1 = Number.parseInt(document.getElementById("income1").value);
  let i2 = Number.parseInt(document.querySelector("#income2").value);
  document.getElementById("result").value = CombineIncomes(i1, i2);
}

function CombineIncomes(income1, income2) {
  return util.AddNumbers(income1, income2);
}

//FETCHING DATA
document.getElementById("btn_getdata").addEventListener("click", (e) => {
  fetch("dogs.json")
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((dogs) => {
      dogs.forEach((dog) => {
        addDogDiv(dog);
      });
    });
});

//DESTRUCTURE FROM FUNCTION PARAMETERS dog is { name, breed }
function addDogDiv({ name, breed }) {
  document.getElementById("data").innerHTML += `<div>${name} ${breed}</div>`;
}

document.getElementById("btn_lcl").addEventListener("click", SaveData);

/*
Types of Client Storages
1. cookie
2. local storage
3. session storage
*/

function SaveData() {
  document.cookie = "Hello, World";
  let person = {
    name: "Arya",
    likes: ["coding", "gaming"],
    dislikes: ["nature"],
  };

  window.localStorage.setItem("person", JSON.stringify(person));
}
