/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let imagenes = [
    "../src/assets/img/bastos.jpg",
    "../src/assets/img/copas.jpg",
    "../src/assets/img/espadas.jpg",
    "../src/assets/img/oros.jpg"
  ];

  let i = Math.floor(Math.random() * imagenes.length);

  var x = document.createElement("IMG");
  x.setAttribute("src", imagenes[i]);
  x.setAttribute("width", "304");
  x.setAttribute("height", "228");
  document.body.appendChild(x);
};
