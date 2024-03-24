/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  //Declarar Excusas

  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  function generarExcusa() {
    let excusa = `${who[Math.floor(Math.random() * 4)]} ${
      action[Math.floor(Math.random() * 4)]
    } ${what[Math.floor(Math.random() * 3)]} ${
      when[Math.floor(Math.random() * 5)]
    }`;

    let container = document.getElementById("excusa");
    container.innerHTML = excusa;
  }

  //Declara la excusa y coger el contenedor
  let excusa = `${who[Math.floor(Math.random() * 4)]} ${
    action[Math.floor(Math.random() * 4)]
  } ${what[Math.floor(Math.random() * 3)]} ${
    when[Math.floor(Math.random() * 5)]
  }`;

  let botonExcusa = document.getElementById("botonCambiar");

  botonExcusa.addEventListener("click", generarExcusa);
};
